<?php
// Fast, cached, server-side YouTube RSS to JSON feed for Atsuko International (@ATSUKOINTERNATIONAL)
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

$channelId = 'UChN4iv_pO5nu-_24iBKccnA';
$cacheFile = sys_get_temp_dir() . '/atsuko_yt_cache_' . md5($channelId) . '.json';
$cacheTime = 900; // 15 minutes cache to stay ultrafast & avoid rate limits

if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTime)) {
    $cached = @file_get_contents($cacheFile);
    if ($cached) {
        echo $cached;
        exit;
    }
}

$rssUrl = "https://www.youtube.com/feeds/videos.xml?channel_id={$channelId}";
$ctx = stream_context_create([
    'http' => [
        'timeout' => 4,
        'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    ]
]);

$xmlString = @file_get_contents($rssUrl, false, $ctx);
if ($xmlString) {
    $xml = @simplexml_load_string($xmlString);
    if ($xml && isset($xml->entry)) {
        $videos = [];
        foreach ($xml->entry as $entry) {
            $yt = $entry->children('http://www.youtube.com/xml/schemas/2015');
            $id = (string)$yt->videoId;
            $title = (string)$entry->title;
            if ($id) {
                $videos[] = [
                    'id' => $id,
                    'title' => $title,
                    'category' => 'Official YouTube Live'
                ];
            }
            if (count($videos) >= 10) break;
        }
        if (!empty($videos)) {
            $json = json_encode(['status' => 'ok', 'videos' => $videos], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
            @file_put_contents($cacheFile, $json);
            echo $json;
            exit;
        }
    }
}

// Fallback to static youtube-feed.json if network is down
if (file_exists(__DIR__ . '/youtube-feed.json')) {
    echo file_get_contents(__DIR__ . '/youtube-feed.json');
} else {
    echo json_encode(['status' => 'fallback', 'videos' => []]);
}

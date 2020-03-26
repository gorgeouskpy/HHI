<?php
$word = $_GET['word'];
$word = strtolower($word);

$conn = new PDO('sqlite:./dic.db');
if(!$conn){
    echo '连接失败';
    die;
}

$sql = <<<SQLX
SELECT word,meaning FROM dic
WHERE word LIKE '$word'
LIMIT 1;
SQLX;

$res = $conn->query($sql);
$res->setFetchMode(PDO::FETCH_ASSOC);

$row = $res->fetch();

if(!$row){
    echo <<<J
    {
        "word":"$word",
        "meaning":"很遗憾，没有找到 $word 的释义！"
    }
J;
    die;
}

$row = json_encode($row);

echo $row;
?>
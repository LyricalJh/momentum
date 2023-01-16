const verses = [
    {
        verse: "내가 가진 의는 율법에서 난 것이 아니요 오직 그리스도를 믿음으로 말미암은 것이니 곧 믿음으로 하나님께로서 난 의라",
        chapter: "빌립보서 3:09",
    },

    {
        verse: "형제 사랑에 관하여는 너희에게 쓸 것이 없음은 너희가 친히 하나님의 가르침심을 받아 서로 사랑함이라",
        chapter: "데살로니가전서 4:09",
    },

    {
        verse: "너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든것을 너희에게 더하시리라",
        chapter: "마태복음 7:33 ",
    },

    {
        verse: "우리는 하나님께 속하였으니 하나님을 아는 자는 우리의 말을 듣고 하나님께 속하지 아니한 자는 우리의 말을 듣지 아니하나니 진리의 영과 미혹의 영을 이로서 아느니라 ",
        chapter: "요한일서 4:06",
    },

    {
        verse: "그러므로 네가 우리 주의 증거와 또는 주를 위하여 갇힌 자 된 나를 부끄러워 말고 오직 하나님의 능력을좇아 복음과 함께 고난을 받으라 ",
        chapter: "디모데후서 1:08",
    },

    {
        verse: "너희 빛을 사람 앞에 비취게 하여 저희로 너희 착한 행실을 보고 하늘에 계신 너희 아버지께 영광을 돌리게 하라 ",
        chapter: "마태복음 5:16",
    },

    {
        verse: "나를 인하여 너희를 욕하고 핍박하고 거짓으로 너희를 거스려 모든 악한 말을 할 때에는 너희에게 복이 있나니",
        chapter: "마태복음 5:11",
    },

    {
        verse: "하나님은 모든 사람이 구원을 받으며 진리를 아는 데 이르기를 원하시느니라",
        chapter: "디모데전서 2:04",
    },

    {
        verse: "주의 약속은 어떤이의 더디다고 생각하는 것같이 더딘 것이 아니라 오적 너희를 대하여 오래 참으사 아무도 멸망치 않고 다 회개하기에 이르기를 원하시느니라",
        chapter: "배드로후서 3:09",
    },

    {
        verse: "모든 눈물을 그눈에서 씻기시매 다시 사망이 없고 애통하는 것이나 곡하는 것이나 아픈 것이 다시 있지 아니하리니 처음 것들이 다 지나갔음이러라 ",
        chapter: "요한계시록 21:04",
    },
];

const verse = document.querySelector("#verses span:first-child");
const chapter = document.querySelector("#verses span:last-child");

const todaysVerse = verses[Math.floor(Math.random() * verses.length)];

verse.innerText = todaysVerse.verse;
chapter.innerText = todaysVerse.chapter;



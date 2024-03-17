keypiano = {
    '1':'sound/key03.ogg',
    '2':'sound/key04.ogg',
    '3':'sound/key05.ogg',
    '4':'sound/key06.ogg',
    '5':'sound/key07.ogg',
    '6':'sound/key08.ogg',
    '7':'sound/key09.ogg',
    '8':'sound/key10.ogg',
    '9':'sound/key11.ogg',
    'a':'sound/key12.ogg',
    'b':'sound/key12.ogg',
    'c':'sound/key13.ogg',
    'd':'sound/key14.ogg',
    'e':'sound/key15.ogg',
    'f':'sound/key16.ogg',
    'g':'sound/key17.ogg',
    'h':'sound/key18.ogg',
    'i':'sound/key19.ogg',
    'j':'sound/key20.ogg',
    'k':'sound/key21.ogg',
    'l':'sound/key22.ogg',
    'm':'sound/key23.ogg',
    'n':'sound/key24.ogg',
    'o':'sound/key08.ogg',
    'p':'sound/key09.ogg',
    'q':'sound/key05.ogg',
    'r':'sound/key03.ogg',
    's':'sound/key02.ogg',
    't':'sound/key07.ogg',
    'u':'sound/key06.ogg',
    'v':'sound/key11.ogg',
    'w':'sound/key14.ogg',
    'x':'sound/key17.ogg',
    'w':'sound/key18.ogg',
    'z':'sound/key10.ogg',
}

document.addEventListener('keydown',(e)=> piano(e.key))

function piano (key){

    audio = new Audio(keypiano[key])
    audio.play();

}
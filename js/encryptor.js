var encryptButton = document.querySelector(".encrypt");
var decryptButton = document.querySelector(".decrypt");
encryptButton.addEventListener('click', function(e)
{
    e.preventDefault();
    var words = document.querySelector("#toEncrypt").value.toLowerCase();
    var newWords = '';
    for (var i = 0; i < words.length; i++)
    {
        if (words[i] == 'e')
        {
            newWords += 'enter';
        }
        else if (words[i] == 'i')
        {
            newWords += 'imes';
        }
        else if (words[i] == 'a')
        {
            newWords += 'ai';
        }
        else if (words[i] == 'o')
        {
            newWords += 'ober';
        }
        else if (words[i] == 'u')
        {
            newWords += 'ufat';
        }
        else
        {
            newWords += words[i];
        }
    }
    var showMessage = document.querySelector(".encryptedMessage");
    showMessage.textContent = newWords;
});
decryptButton.addEventListener('click', function(e)
{
    e.preventDefault();
    var words = document.querySelector("#toDecrypt").value.toLowerCase();
    words = words.replaceAll('enter', 'e');
    words = words.replaceAll('imes', 'i');
    words = words.replaceAll('ai', 'a');
    words = words.replaceAll('ober', 'o');
    words = words.replaceAll('ufat', 'u');
    var showMessage = document.querySelector(".decryptedMessage");
    showMessage.textContent = words;
});
var copy1 = document.querySelector(".encryptedCopy");
copy1.addEventListener('click', function()
{
    var copySpan = document.querySelector(".encryptedMessage");
    navigator.clipboard.writeText(copySpan.textContent);
});
var copy2 = document.querySelector(".decryptorCopy");
copy2.addEventListener('click', function()
{
    var copySpan = document.querySelector(".decryptedMessage");
    navigator.clipboard.writeText(copySpan.textContent);
});
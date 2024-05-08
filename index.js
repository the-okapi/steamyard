var client = new XMLHttpRequest();
client.open('GET', 'data/test.txt');
client.onreadystatechange = function() {
  alert(client.responseText);
}
client.send();
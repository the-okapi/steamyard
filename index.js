var client = new XMLHttpRequest();
client.open('GET', 'data/test.txt');
client.onload = function() {
  alert(client.responseText);
}
client.send();
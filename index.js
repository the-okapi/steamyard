function get(url) {  
  let client = new XMLHttpRequest();
  client.open('GET', url);
  client.onload = function() {
    return this.responseText;
  }
  client.send();
}

document.getElementById('overall').innerHTML = get('data/overall.txt');
document.getElementById('mud').innerHTML = get('data/mud.txt');
document.getElementById('water').innerHTML = get('data/water.txt');
document.getElementById('sand').innerHTML = get('data/sand.txt');
document.getElementById('art').innerHTML = get('data/art.txt');
document.getElementById('science').innerHTML = get('data/science.txt');
document.getElementById('outdoorclassroom').innerHTML = get('data/outdoorclassroom.txt'); 
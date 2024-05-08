function get(url) {  
  let client = new XMLHttpRequest();
  client.open('GET', url);
  client.onload = function() {
    return this.responseText;
  }
  client.send();
}

document.getElementById('overall').innerHTML = get('assets/data/overall.txt');
document.getElementById('mud').innerHTML = get('assets/data/mud.txt');
document.getElementById('water').innerHTML = get('assets/data/water.txt');
document.getElementById('sand').innerHTML = get('assets/data/sand.txt');
document.getElementById('art').innerHTML = get('assets/data/art.txt');
document.getElementById('science').innerHTML = get('assets/data/science.txt');
document.getElementById('outdoorclassroom').innerHTML = get('assets/data/outdoorclassroom.txt'); 
var images = [
    "images.jpg","family.jpg","index.jpg","FamilyGroupShot_PHOTOBYCHRISANDRUTHPHOTOGRAPHY-7c6014b0ab6443d1a86bb0773183efbc.jpg","family+photographs+aberdeen.jpg","best-cleveland-family-photographers-1080x600.jpg"];







var i = 0;
function nextslide() {
  if(i == 9)
     {
       i=0;
     }
   
    document.getElementById("album").src = images[i];
  i++;
}
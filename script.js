// Inisialisasi peta Lampung

var map = L.map('map').setView([-5.2, 105.3], 8);

// Basemap OpenStreetMap

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:'© OpenStreetMap',
    maxZoom:19
}
).addTo(map);


// ============================
// DATA KABUPATEN/KOTA LAMPUNG
// ============================

const wilayahLampung = [

{
nama:"Bandar Lampung",
koordinat:[-5.429,105.261],
potensi:`
<b>Bandar Lampung</b><br>
📍 Peta Administrasi<br>
📍 Peta Toponimi/Objek Dan Tempat Penting<br>
📍 Peta Rawan Banjir<br>
📍 Dan Lain Lain
`
},

{
nama:"Metro",
koordinat:[-5.113,105.307],
potensi:`
<b>Metro</b><br>
📍 Peta Administrasi<br>
📍 Peta Toponimi/Objek Dan Tempat Penting<br>
📍 Dan Lain Lain
`
},

{
nama:"Lampung Selatan",
koordinat:[-5.562,105.547],
potensi:`
<b>Lampung Selatan</b><br>
📍 Peta Objek Wisata<br>
📍 Peta Jalur Evakuasi Tsunami<br>
📍 Peta Potensi Desa<br>
📍 Peta Shelter Evakuasi Tsunami<br>
📍 Dan Lain Lain
`
},

{
nama:"Lampung Timur",
koordinat:[-5.111,105.681],
potensi:`
<b>Lampung Timur</b><br>
📍 Peta Pertanian<br>
📍 Peta Tambak<br>
📍 Peta Garis<br>
📍 Dan Lain Lain
`
},

{
nama:"Lampung Tengah",
koordinat:[-4.900,105.200],
potensi:`
<b>Lampung Tengah</b><br>
📍 Peta Pertanian<br>
📍 Peta Tambak<br>
📍 Peta Garis<br>
📍 Peta Potensi Desa<br>
📍 Dan Lain Lain
`
},

{
nama:"Lampung Utara",
koordinat:[-4.830,104.900],
potensi:`
<b>Lampung Utara</b><br>
📍 Peta Pertanian<br>
📍 Peta Garis<br>
📍 Peta Potensi Desa<br>
📍 Dan Lain Lain
`
},

{
nama:"Lampung Barat",
koordinat:[-5.037,104.076],
potensi:`
<b>Lampung Barat</b><br>
📍 Peta Objek Wisata Alam<br>
📍 Peta Kerawanan Longsor<br>
📍 Dan Lain Lain
`
},

{
nama:"Way Kanan",
koordinat:[-4.433,104.600],
potensi:`
<b>Way Kanan</b><br>
📍 Peta Garis<br>
📍 Peta Perkebunan<br>
📍 Peta Administrasi Desa
`
},

{
nama:"Tulang Bawang",
koordinat:[-4.450,105.250],
potensi:`
<b>Tulang Bawang</b><br>
📍 Peta Pertanian<br>
📍 Peta Tambak<br>
📍 Peta Potensi Desa<br>
📍 Dan Lain Lain
`
},

{
nama:"Tulang Bawang Barat",
koordinat:[-4.520,105.090],
potensi:`
<b>Tulang Bawang Barat</b><br>
📍 Peta Pertanian<br>
📍 Peta Administrasi Desa<br>
📍 Dan Lain Lain
`
},

{
nama:"Mesuji",
koordinat:[ -4.027014,105.382423],
potensi:`
<b>Mesuji</b><br>
📍 Peta Tambak<br>
📍 Peta Perkebunan<br>
📍 Peta Penggunaan Lahan<br>
📍 Dan Lain Lain
`
},

{
nama:"Pesawaran",
koordinat:[-5.493,105.079],
potensi:`
<b>Pesawaran</b><br>
📍 Peta Wisata<br>
📍 Peta Potensi Desa<br>
📍 Peta Kerawanan Longsor<br>
📍 Peta Garis Pantai<br>
📍 Dan Lain Lain
`
},

{
nama:"Pringsewu",
koordinat:[-5.358,104.975],
potensi:`
<b>Pringsewu</b><br>
📍 Peta Wisata<br>
📍 Peta Potensi Desa<br>
📍 Peta Kerawanan Longsor<br>
📍 Dan Lain Lain
`
},

{
nama:"Tanggamus",
koordinat:[-5.470,104.650],
potensi:`
<b>Tanggamus</b><br>
📍 Peta Wisata<br>
📍 Peta Potensi Desa<br>
📍 Peta Kerawanan Longsor<br>
📍 Peta Garis Pantai<br>
📍 Dan Lain Lain
`
},

{
nama:"Pesisir Barat",
koordinat:[-5.193,103.939],
potensi:`
<b>Pesisir Barat</b><br>
📍 Peta Wisata<br>
📍 Peta Potensi Desa<br>
📍 Peta Kerawanan Longsor<br>
📍 Peta Garis Pantai<br>
📍 Peta Jalur Evakuasi Tsunami<br>
📍 Peta Shelter Evakuasi Tsunami<br>
📍 Dan Lain Lain
`
}

];


// Membuat marker otomatis

wilayahLampung.forEach(function(wilayah){

L.marker(wilayah.koordinat)
.addTo(map)
.bindPopup(wilayah.potensi);

});

const acc = document.querySelectorAll(".accordion");

acc.forEach(btn => {

btn.addEventListener("click", function(){

this.classList.toggle("active");

const panel = this.nextElementSibling;

if(panel.style.display === "block"){
panel.style.display = "none";
}else{
panel.style.display = "block";
}

});

});

// Clients.jsx
import React from 'react';
import './Clients.css';

const clientsData = [
  {
    id: 1,
    name: 'Tata Groups',
    logo: 'https://cdn.iconscout.com/icon/free/png-256/free-tata-2709165-2249147.png',
    officialPage: 'https://www.tata.com/',
  },
  {
    id: 2,
    name: 'Reliance Industries',
    logo: 'https://rilstaticasset.akamaized.net/sites/default/files/images/ril-logo-social_media.jpg',
    officialPage: 'https://www.ril.com/',
  },
  {
    id: 3,
    name: 'Oscars',
    logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ccd9768-f425-4771-9027-0daf180905d7/de3maru-428c4fbb-8b81-43dc-860b-d71a528687c4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjY2Q5NzY4LWY0MjUtNDc3MS05MDI3LTBkYWYxODA5MDVkN1wvZGUzbWFydS00MjhjNGZiYi04YjgxLTQzZGMtODYwYi1kNzFhNTI4Njg3YzQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Jl_xlep3wRPaZWydYN_8lKod2OgeMfNoOntrfwIeUsU',
    officialPage: 'https://www.oscars.org/',
  },
  {
    id: 4,
    name: 'Cannes Film Festival',
    logo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ccd9768-f425-4771-9027-0daf180905d7/de5r05s-298f34ef-2d41-42dc-a79f-1385c2093157.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVjY2Q5NzY4LWY0MjUtNDc3MS05MDI3LTBkYWYxODA5MDVkN1wvZGU1cjA1cy0yOThmMzRlZi0yZDQxLTQyZGMtYTc5Zi0xMzg1YzIwOTMxNTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ruwYyoxlEQFISDufDa-sO6DHnQ7wxkNwCV5Pjj4G64o',
    officialPage: 'https://www.festival-cannes.com/en/',
  },
  {
    id: 5,
    name: 'Vatican',
    logo: 'https://en.pimg.jp/028/548/676/1/28548676.jpg',
    officialPage: 'https://www.vatican.va/content/vatican/en.html',
  },
  {
    id: 6,
    name: 'Sun TV',
    logo: 'https://seeklogo.com/images/S/sun-tv-logo-33F737A981-seeklogo.com.png',
    officialPage: 'https://www.sunnetwork.in/',
  },
  {
    id: 7,
    name: 'The White House',
    logo: 'https://img.freepik.com/premium-vector/white-house-icon_602006-2432.jpg',
    officialPage: 'https://www.whitehouse.gov/',
  },
  {
    id: 8,
    name: 'Narendra Modi',
    logo: 'https://freepngimg.com/download/narendra_modi/71174-prime-of-india-narendra-minister-modi.png',
    officialPage: 'https://www.narendramodi.in/',
  },
  {
    id: 9,
    name: 'Cricket World Cup',
    logo: 'https://logowik.com/content/uploads/images/2023-icc-mens-cricket-world-cup7782.logowik.com.webp',
    officialPage: 'https://www.icc-cricket.com/tournaments/cricketworldcup',
  },
  {
    id: 10,
    name: 'IPL',
    logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuey_8VKd-PkrlcSkLgGDMVxFfczgI5nEeEDadAgBLy9tE9DXMH7axynfMTg1WoQItWyJyK5mIa50CW65iNTIVRetq3dlAbvGBNxgyTzJ73jLVbo3e240AC1eriS71J9hCU7L_f5zgapKLqMYIFT-MroRk-HzKyGlnkTtTFA5LmPalHnfPt_LM0mop/s1920/Original%20Indian%20Premier%20League%20IPL%20Logo%20PNG%20Transparent%20Images%20File%20Download%20Free%20Download.png',
    officialPage: 'https://www.iplt20.com/',
  },
  {
    id: 11,
    name: 'RajKamal Films International',
    logo: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Logo_of_Raaj_Kamal_Films_International.png',
    officialPage: 'https://ikamalhaasan.com/',
  },
  {
    id: 12,
    name: 'Vladimir Putin',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_the_President_of_Russia.svg/800px-Flag_of_the_President_of_Russia.svg.png',
    officialPage: 'http://en.kremlin.ru/',
  },
  {
    id: 13,
    name: 'SunShine Orchestra',
    logo: 'https://c8.alamy.com/comp/2PWCF05/string-fiddle-instruments-in-symphony-orchestra-2PWCF05.jpg',
    officialPage: 'https://arrahmanfoundation.org/sunshine.html',
  },
  {
    id: 14,
    name: 'Nobel',
    logo: 'https://cdn.britannica.com/98/20998-050-64055D2E/side-Physics-medals-Chemistry-Nobel-Prize-Literature.jpg',
    officialPage: 'https://www.nobelprize.org/',
  },
  {
    id: 15,
    name: 'Olympics',
    logo: 'https://cdn.britannica.com/01/23901-050-33507FA4/flag-Olympic-Games.jpg',
    officialPage: 'https://olympics.com/en/',
  },
  {
    id: 16,
    name: 'Indian Army',
    logo: 'https://oliveplanet.in/cdn/shop/products/un-mission-indian-army-logo-patch-2-5-x-2-5-inches_960x960.jpg?v=1668153849',
    officialPage: 'https://indianarmy.nic.in/',
  },
];

const Clients = () => {
  const handleLogoClick = (officialPage) => {
    window.location.href = officialPage;
  };

  return (
    <div className="clients-page">
      <h1>Our Clients</h1>
      <div className="client-logos">
        {clientsData.map((client) => (
          <div
            key={client.id}
            className="client-logo"
            onClick={() => handleLogoClick(client.officialPage)}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="logo-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;

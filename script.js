document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const resultsContainer = document.getElementById('resultsContainer');
  const detailModal = new bootstrap.Modal(document.getElementById('detailModal'));
  
  let data = [];

  // Data directly included
  data = [
    {
      "nama": "Altje Meity Vera Mondigir",
      "username": "altjemondigir@gmail.com",
      "verifikasi_akun": "Belum",
      "status_akun": "Aktif"
    },
    {
      "nama": "Anita Christine Rorimpandey",
      "username": "anita.rorimpandey.smp4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "ANNIETA GRETA ZUSJE TAWAANG",
      "username": "smp_annieta.tawaang@gmail.com",
      "verifikasi_akun": "Belum",
      "status_akun": "Aktif"
    },
    {
      "nama": "ANNIETA GRETA ZUSJE TAWAANG",
      "username": "annieta.tawaang.smp4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "ARESTA TOPUH",
      "username": "arestatopuh10@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "ARESTA TOPUH",
      "username": "aresta.topuh1996@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "BRIAN SPIROS KAKOMBOHI",
      "username": "briankakombohi@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "BRIAN SPIROS KAKOMBOHI",
      "username": "briankakombohi@gmail.com",
      "verifikasi_akun": "Belum",
      "status_akun": "Tidak Aktif"
    },
    {
      "nama": "BRIAN SPIROS KAKOMBOHI",
      "username": "briankakombohi1@gmail.com",
      "verifikasi_akun": "Belum",
      "status_akun": "Aktif"
    },
    {
      "nama": "Christine L.d.tombiling",
      "username": "christinetombiling1973@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Deby Christien Wongkar",
      "username": "deby.wongkar.smp4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Deki Chorneles Mamarehe Mamalu",
      "username": "deki.mamalu.smp4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Delfi J Pondaag",
      "username": "delfi.pondaag.smp4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Denny Diane Mamangkey",
      "username": "denny.mamangkey.smp4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Detty Watung",
      "username": "dettywatung.smpn4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Dewi Angriani Sipa Badi",
      "username": "dewisipabadi@gmail.com",
      "verifikasi_akun": "Belum",
      "status_akun": "Aktif"
    },
    {
      "nama": "Dewi Angriani Sipa Badi",
      "username": "ewimisterius@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Dra. Risna D. Tingginehe, M.pd",
      "username": "risnadestriatingginehe@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "FAISAL KURNIAWAN MUFTI",
      "username": "faisal.kurniawan95@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Feramita Ampouw",
      "username": "feramita.ampouw.smp4@outlook.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Fery Singal",
      "username": "ferysingalsmpn4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Fien Magdalena Mundung",
      "username": "fienmundungsmpn4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Fonny Agustina Kumontoy S.Pd",
      "username": "fonny.kumontoy.smp4@outlook.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Frieda Julin Rosang",
      "username": "friedarosang@outlook.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "GISIELLA RAMBING",
      "username": "gisiellarambing97@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Gledys Apricilia Mangore",
      "username": "gledysmangore1993@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Gledys Apricilia Mangore",
      "username": "gledysmangore44@guru.smp.belajar.id",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Gledys Apricilia Mangore",
      "username": "apriciliag@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Hasum Mokoginta",
      "username": "hasum.mokoginta.smp4@outlook.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Honny Handry Tompodung",
      "username": "honny.tompudung.smp4@outlook.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "I Nengah Harta",
      "username": "i.nengah.harta.smp4@outlook.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Irene Vonny Jety Wokas",
      "username": "wokas.irene99@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Jean Suzana Lengkey",
      "username": "jean.lengkey.smp4@outlook.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Jhonson Lengkong Dengah",
      "username": "jhonsondengah@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Lidia Olvia Mekel",
      "username": "lidiamekel@outlook.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Maria  M E Longkeng, S.pd",
      "username": "mlongkeng1974@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Marsellus Najoan, S.pd",
      "username": "marsellusnajoansmpn4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Meisry Herny M. Tumbel",
      "username": "meisrytumbel.smp4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Michelia Veychie Langkun",
      "username": "michelialangkun@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Mince Merlina Maleke",
      "username": "malekemer16@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Nova Sondakh",
      "username": "novasondakhsmpn4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Novilia Dwi Sartika Suprapto",
      "username": "noviliasuprapto@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Olivia Libra Paat",
      "username": "oliviapaat68@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Olyfia Lumawir",
      "username": "olyfialumawirspenpat@gmail.com",
      "verifikasi_akun": "Belum",
      "status_akun": "Aktif"
    },
    {
      "nama": "Rahman Manggopa",
      "username": "rahmanmanggopa244@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Rahman Manggopa",
      "username": "rahmanmanggopa244@gmail.com",
      "verifikasi_akun": "Belum",
      "status_akun": "Aktif"
    },
    {
      "nama": "Reymond Rudolof Rawung",
      "username": "reymondrawung1989@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Reymond Rudolof Rawung",
      "username": "reymondrawung1989@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Reymond Rudolof Rawung",
      "username": "reymondrawung1989@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Ridha M. Lasahido",
      "username": "ridhalasahido@gmail.com",
      "verifikasi_akun": "Belum",
      "status_akun": "Aktif"
    },
    {
      "nama": "Rien Lettie Umboh",
      "username": "rienumboh.smp4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Rohmad Louto",
      "username": "dilly.rohmad@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Santi Kembuan",
      "username": "santykembuanspenpat@gmail.com",
      "verifikasi_akun": "Belum",
      "status_akun": "Aktif"
    },
    {
      "nama": "Sherly G. Rondonuwu",
      "username": "sherlyrondonuwu.smp4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Silvana Porajow",
      "username": "sporajow84@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Silvana Porajow",
      "username": "smp_sporajow84@gmail.com",
      "verifikasi_akun": "Belum",
      "status_akun": "Aktif"
    },
    {
      "nama": "Sultjie Anna Barlinda Mononimbar",
      "username": "msultjiesmpn4@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "SUSJEANE CHRISTIN MARINTJA",
      "username": "Susjeanemarintja@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    },
    {
      "nama": "Tita Restiati",
      "username": "tita.restiati@gmail.com",
      "verifikasi_akun": "Belum",
      "status_akun": "Aktif"
    },
    {
      "nama": "Zanny Yulianti Suoth, S.pd",
      "username": "suothzanny@gmail.com",
      "verifikasi_akun": "Sudah",
      "status_akun": "Aktif"
    }
  ];


  console.log(data.length);
  // Search function
  function search() {
      const query = searchInput.value.toLowerCase();
      const results = data.filter(item => 
          item.nama.toLowerCase().includes(query) || 
          item.username.toLowerCase().includes(query)
      );
      displayResults(results);
  }

  // Display results
  function displayResults(results) {
      resultsContainer.innerHTML = '';
      results.forEach(item => {
          const card = document.createElement('div');
          card.className = 'col-md-6 result-card';
          card.innerHTML = `
              <h5>${item.nama}</h5>
              <p class="text-muted">${item.username}</p>
              <div class="d-flex gap-2">
                  <span class="badge ${item.verifikasi_akun === 'Sudah' ? 'bg-success' : 'bg-warning'}">
                      ${item.verifikasi_akun}
                  </span>
                  <span class="badge ${item.status_akun === 'Aktif' ? 'bg-primary' : 'bg-secondary'}">
                      ${item.status_akun}
                  </span>
              </div>
          `;
          card.addEventListener('click', () => showDetails(item));
          resultsContainer.appendChild(card);
      });
  }

  // Show details in modal
  function showDetails(item) {
      document.getElementById('detailName').textContent = item.nama;
      document.getElementById('detailEmail').textContent = item.username;
      document.getElementById('detailStatus').textContent = item.status_akun;
      document.getElementById('detailKeaktifan').textContent = item.verifikasi_akun;
      document.getElementById('detailPass').textContent = '********';
      detailModal.show();
  }

  // Event listeners
  console.log('Adding event listeners...');
  searchButton.addEventListener('click', function() {
      console.log('Search button clicked');
      search();
  });
  searchInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
          console.log('Enter key pressed');
          search();
      }
  });
  
  // Initial test search
  console.log('Performing initial test search...');
  // searchInput.value = 'Altje';
  // search();
});

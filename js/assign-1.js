// var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // console.log(this.responseText);
    var data = JSON.parse(this.responseText);
    console.log(data)

    var ids = data.map((product) => {
      return (product.id);
    })
    console.log(ids)

    var firstName = data.map((product) => {
      return product.firstName
    })
    console.log(firstName)

    var lastName = data.map((product) => {
      return product.lastName
    })
    console.log(lastName)

    var email = data.map((product) => {
      return product.email
    })
    console.log(email)

    var phone = data.map((product) => {
      return product.phone
    })
    console.log(phone)

    var cont1 = document.getElementById('table-data');
    var tble = document.createElement('table');

    for (j = 0; j < ids.length; j++) {

      var row = document.createElement('tr')

      var cell_1 = document.createElement('td')
      cell_1.innerHTML = ids[j]
      cell_1.classList.add('column1')
      // cell_1.style.border='1px solid red'
      row.appendChild(cell_1);

      var cell_2 = document.createElement('td')
      cell_2.innerHTML = firstName[j]
      cell_2.classList.add('column2')
      // cell_2.style.border='1px solid red'
      row.appendChild(cell_2);

      var cell_3 = document.createElement('td')
      cell_3.innerHTML = lastName[j]
      cell_3.classList.add('column3')
      // cell_3.style.border='1px solid red'
      row.appendChild(cell_3);

      var cell_4 = document.createElement('td')
      cell_4.innerHTML = email[j]
      cell_4.classList.add('column4')
      // cell_4.style.border='1px solid red'
      row.appendChild(cell_4);

      var cell_5 = document.createElement('td')
      cell_5.innerHTML = phone[j]
      cell_5.classList.add('column5')
      // cell_5.style.border='1px solid red'
      row.appendChild(cell_5);

      cont1.appendChild(tble);
      tble.appendChild(row);
    }


    var allRows = document.querySelectorAll('tr');
    console.log(allRows)
    for (var k = 0; k < allRows.length; k++) {
      allRows[k].addEventListener('click', function (e) {
        document.querySelector('#info-wrapper p').style.display = 'none'
        document.getElementById('info-content').style.display = 'block'


        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.parentElement)
        var z = e.target.parentElement
        var y = document.querySelectorAll('tr')
        for (l = 0; l < data.length+1; l++) {
          y[l].classList.remove('active-row')
        }
        z.classList.add('active-row')

        // console.log(typeof(z));
        // console.log(this.childElementCount)
        var requiredId = this.firstChild.innerHTML
        console.log(requiredId);

        var reqdobject = data.find((product) => {
          return product.id == requiredId
        })
        console.log(reqdobject.description);
        document.getElementById('fullname').innerHTML = reqdobject.firstName + ' ' + reqdobject.lastName
        document.getElementById('description').innerHTML = reqdobject.description
        document.getElementById('adress').innerHTML = reqdobject.address.streetAddress
        document.getElementById('city').innerHTML = reqdobject.address.city
        document.getElementById('state').innerHTML = reqdobject.address.state
        document.getElementById('zip').innerHTML = reqdobject.address.zip


      })


    }

    var forminput = document.getElementById('search-box')
    forminput.addEventListener('keyup', function (e) {

      console.log(forminput.value);
      var txt = forminput.value.toLowerCase();
      var content = document.querySelectorAll('tr');
      for (m = 1; m < content.length; m++) {
      

        var td0 = content[m].getElementsByTagName('td')[0].innerHTML.toLowerCase();
        var td1 = content[m].getElementsByTagName('td')[1].innerHTML.toLowerCase();
        var td2 = content[m].getElementsByTagName('td')[2].innerHTML.toLowerCase();
        var td3 = content[m].getElementsByTagName('td')[3].innerHTML.toLowerCase();
        var td4 = content[m].getElementsByTagName('td')[4].innerHTML.toLowerCase();
        
        console.log(td1, td2, td3)


        //  console.log(arr)

        // console.log(q);
        if (td0.indexOf(txt) > -1 || td1.indexOf(txt) > -1 || td2.indexOf(txt) > -1 || td3.indexOf(txt) > -1 || td4.indexOf(txt) > -1) {
          content[m].style.display = 'block';
          
        
        }
        else {
          content[m].style.display = 'none';  

        }


      }


    })


  }
}
xhttp.open('GET', 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D', true)
xhttp.send();


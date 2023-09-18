const modalAddEl = document.getElementById('modal-add')
const modalRemoveEl = document.getElementById('modal-remove')
const modalViewEl = document.getElementById('modal-view')

const loadModalAddBody = () => {
  let formBody = ''
  let fieldInput = ''

  allFields.filter(item => item !== 'id').forEach(fieldName => {
    fieldName = fieldName === 'isbn'
      ? fieldName.toUpperCase()
      : fieldName.charAt(0).toUpperCase() + fieldName.substring(1)
    fieldInput = `<input type="text" name="${fieldName}" `

    switch (fieldName.toLowerCase()) {
      case 'name':
        fieldInput += `placeholder="Input book's name" />`
        break;

      case 'author':
        fieldInput += `placeholder="Input book's author(s)" />`
        break;

      case 'image':
        fieldInput = `
          <input id="img-uploader"
            type="file" name="${fieldName}"
            accept="image/*"
            onchange="uploadFile(event)"
          />
        `
        break;

      case 'topic':
        fieldInput = `
          <select name="${fieldName}">
            <option value="" selected disabled hidden>Select topic</option>
        `
        for (const [topicKey, topic] of Object.entries(topics)) {
          fieldInput += `<option value="${topicKey}">${topic}</option>`
        }
        fieldInput += `</select>`
        break;

      case 'isbn':
        fieldInput += `placeholder="Input book's ISBN"/>`
        break;

      case 'description':
        fieldInput = `<textarea name="${fieldName}" rows="3" placeholder="Input description"></textarea>`
        break;

      default:
        break;
    }

    formBody += `
      <div class="v-flex form__field">
        <label for="${fieldName}">${fieldName}</label>
        ${fieldInput}
      </div>
    `
  })
  document.getElementById('form').innerHTML = formBody
}

const loadModalRemoveBody = bookId => {
  let modalBody = ''
  const book = listBooks.find(({ id }) => id === bookId)
  const btnRemove = document.getElementById('btn-remove')

  if (!book) {
    modalBody = `
      <p class="msg-empty text-center">
        <i>Sorry, this book cannot be found! :< </i>
      </span>
    `
    btnRemove.disabled = true
  }
  else {
    modalBody = `
      <p class="text-center">
        Are you sure to remove <b>${book?.name}</b> book?
      </p>
    `
    btnRemove.disabled = false
    btnRemove.addEventListener('click', () => {
      removeBook(bookId)
    })
  }
  document.getElementById('removing-book').innerHTML = modalBody
}

const loadModalViewBody = bookId => {
  let modalBody = ''
  const book = listBooks.find(({ id }) => id === bookId)

  if (!book)
    modalBody = `
      <span class="msg-empty">
        <i>Sorry, this book cannot be found! :< </i>
      </span>
    `
  else {
    modalBody = `
      <div class="grid">
        <img src="${book?.image}" alt="cover-image" />
        <div class="right-col">
          <h3>${book?.name}</h3>
          <p class="author">${book?.author}</p>
          <div class="h-flex">
            <p><b>ISBN:</b> ${book?.isbn}</p>
            <p class="topic"><b>Topic:</b> <span>${book?.topic}</span></p>
          </div>
          <br/><hr/>
          <p class="desc">
            <b>Description</b>
            ${book?.description}
          </p>
        </div>
      </div>
    `
  }
  document.getElementById('book-detail').innerHTML = modalBody
}

const openModalAdd = () => {
  if (modalAddEl.innerHTML)
    modalAddEl.style.display = "block"
  else {
    fetch('./html/modal-add.html')
      .then(res => res.text())
      .then(data => {
        // Load modal
        modalAddEl.innerHTML = data
        modalAddEl.style.display = "block"
        // Load modal body data
        loadModalAddBody()
      })
  }
}

const openModalRemove = bookId => {
  fetch('./html/modal-remove.html')
    .then(res => res.text())
    .then(data => {
      modalRemoveEl.innerHTML = data
      modalRemoveEl.style.display = "block"
      loadModalRemoveBody(bookId)
    })
}

const openModalView = bookId => {
  fetch('./html/modal-view.html')
    .then(res => res.text())
    .then(data => {
      modalViewEl.innerHTML = data
      modalViewEl.style.display = "block"
      loadModalViewBody(bookId)
    })
}

const closeModal = modalType => {
  switch (modalType) {
    case 'add':
      modalAddEl.style.display = "none"
      break;

    case 'remove':
      modalRemoveEl.innerHTML = ''
      modalRemoveEl.style.display = "none"
      break;

    case 'view':
      modalViewEl.innerHTML = ''
      modalViewEl.style.display = "none"
      break;

    default:
      break;
  }
}

window.onload = () => {
  const headerEl = document.getElementsByTagName('header').item(0)
  const mainEl = document.getElementsByTagName('main').item(0)

  fetch('./html/header.html')
    .then(res => res.text())
    .then(data => {
      headerEl.innerHTML = data
    })

  fetch('./html/main.html')
    .then(res => res.text())
    .then(data => {
      mainEl.innerHTML = data
    })
    .then(() => {
      listBooks = getAllBooks()
      loadTable(listBooks)
    })
}

// When user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target == modalAddEl)
    closeModal('add')
  else if (event.target == modalRemoveEl)
    closeModal('remove')
  else if (event.target == modalViewEl)
    closeModal('view')
}


// ===========================================================
// Import a HTML file into another HTML file
// >> Not-worked solution
// Resource: https://www.jotform.com/blog/html5-imports-import-html-files-into-html-files-83467/#:~:text=Embedding%20an%20HTML%20file%20is,comes%20to%20stylesheets%20and%20scripts.
/*
  // JS
  const mainPage = document.getElementsByTagName("link")[0].import;
  mainPage.getElementById('tbody').innerHTML = tbodyData;

  // HTML
  <link href="./html/main-page.html" rel="import" />
  <div include-html="./html/main-page.html"></div>
  <script>
    includeHTML();
  </script>
 */
// ---------------------
// >> Worked solution:
// Resource: https://youtu.be/lwRiLHwHOjQ?t=929
// ===========================================================
let listBooks = []

const getAllBooks = () => {
  if (!localStorage.getItem('listBooks'))
    localStorage.setItem('listBooks', JSON.stringify(defaultListBooks))

  listBooks = JSON.parse(localStorage.getItem('listBooks'))
  return listBooks
}

const searchBook = () => {
  let keyword = document.getElementById('search-input').value
  keyword = keyword.trim().toLowerCase()

  if (keyword === '') {
    loadTable(listBooks)
    return
  }

  const searchResults = listBooks.filter(({ name }) =>
    name.toLowerCase().includes(keyword)
  )

  if (searchResults.length > 0)
    loadTable(searchResults)
  else {
    let tbodyData = `
      <tr>
        <td colspan="6">
          <span class="msg-empty">
            <i>Sorry, we don't have the books you're finding! :< </i>
          </span>
        </td>
      </tr>
    `
    document.getElementById('tbody').innerHTML = tbodyData
  }
}

const addBook = () => {
  let form = document.getElementById('form')
  const newBook = { id: Date.now() }
  let fieldName = ''

  for (let i = 0; i < form.length; i++) {
    fieldName = form[i].name.toLowerCase()

    switch (fieldName) {
      case 'image':
        newBook.image = form[i]?.dataset?.imgSrc
        // newBook.image = localStorage.getItem('imgSrc')
        // localStorage.removeItem('imgSrc')
        break;

      case 'topic':
        newBook[fieldName] = topics[form[i].value]
        break;

      default:
        newBook[fieldName] = form[i].value
        break;
    }
  }

  listBooks.push(newBook)
  refreshTable(listBooks)
  form.reset()
  closeModal('add')
}

const removeBook = bookId => {
  const removedIndex = listBooks.findIndex(({ id }) => id === bookId)
  if (removedIndex === -1) return

  listBooks.splice(removedIndex, 1)
  refreshTable(listBooks)
  closeModal('remove')
}

const loadTable = listBooks => {
  let tbodyData = ''

  if (listBooks.length === 0) {
    tbodyData += `
      <tr>
        <td colspan="6">
          <span class="msg-empty">
            <i>Oops... Nothing here! :< <br/> Where's all the books? "." </i>
          </span>
        </td>
      </tr>
    `
  }
  else {
    for (i = 0; i < listBooks.length; i++) {
      tbodyData += `
      <tr>
        <td class='text-center'>${i + 1}</td>
        <td>
          <img src='${listBooks[i]?.image}' alt='book-cover' />
        </td>
        <td>${listBooks[i]?.name}</td>
        <td>${listBooks[i]?.author}</td>
        <td>${listBooks[i]?.topic}</td>
        <td>
          <div class='h-flex justify-around'>
            <button class='btn btn--link' onclick="openModalRemove(${listBooks[i]?.id})">
              Remove
            </button>
            <button class='btn btn--secondary' onclick="openModalView(${listBooks[i]?.id})">
              View
            </button>
          </div>
        </td>
      </tr>
    `
    }
  }
  document.getElementById('tbody').innerHTML = tbodyData;
}

const refreshTable = listBooks => {
  localStorage.setItem('listBooks', JSON.stringify(listBooks))
  loadTable(listBooks)
}

const uploadFile = event => {
  const imgSrc = URL.createObjectURL(event.target.files[0])
  document.getElementById('img-uploader').setAttribute('data-img-src', imgSrc)
  // localStorage.setItem('imgSrc', imgSrc) // solution 1
}
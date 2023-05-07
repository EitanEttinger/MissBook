import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

// JSON
const booksDemoData = [
    {
      "id": "OXeMG8wNskc",
      "title": "metus hendrerit",
      "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
      "authors": [
        "Barbara Cartland"
      ],
      "publishedDate": 1999,
      "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
      "pageCount": 713,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
      "language": "en",
      "listPrice": {
        "amount": 109,
        "currencyCode": "EUR",
        "isOnSale": false
      }
    },
    {
      "id": "JYOJa2NpSCq",
      "title": "morbi",
      "subtitle": "lorem euismod dictumst inceptos mi",
      "authors": [
        "Barbara Cartland"
      ],
      "publishedDate": 1978,
      "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
      "pageCount": 129,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
      "language": "sp",
      "listPrice": {
        "amount": 44,
        "currencyCode": "EUR",
        "isOnSale": true
      }
    },
    {
      "id": "1y0Oqts35DQ",
      "title": "at viverra venenatis",
      "subtitle": "gravida libero facilisis rhoncus urna etiam",
      "authors": [
        "Dr. Seuss"
      ],
      "publishedDate": 1999,
      "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
      "pageCount": 972,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
      "language": "he",
      "listPrice": {
        "amount": 108,
        "currencyCode": "ILS",
        "isOnSale": false
      }
    },
    {
      "id": "kSnfIJyikTP",
      "title": "dictum",
      "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
      "authors": [
        "Danielle Steel"
      ],
      "publishedDate": 1978,
      "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
      "pageCount": 303,
      "categories": [
        "Computers",
        "Hack"
      ],
      "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
      "language": "en",
      "listPrice": {
        "amount": 30,
        "currencyCode": "EUR",
        "isOnSale": true
      }
    },
]


const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter,
}

function query(filterBy = {}) {
    console.log('filterBy service:', filterBy)
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regExp.test(book.title))
            }

            if (filterBy.maxPrice) {
                books = books.filter(book => book.listPrice.amount <= filterBy.maxPrice)
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
    // return axios.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', price = '',thumbnail = '' ) {
    return { id: '', title, price, thumbnail }
}

function getDefaultFilter() {
    return { txt: '', maxPrice: '' }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        // books = []
        // books.push(_createBook('metus hendrerit', 109, 'http://coding-academy.org/books-photos/20.jpg'))
        // books.push(_createBook('morbi', 44, 'http://coding-academy.org/books-photos/14.jpg'))
        // books.push(_createBook('at viverra venenatis', 108, 'http://coding-academy.org/books-photos/2.jpg'))
        // books.push(_createBook('dictum', 30, 'http://coding-academy.org/books-photos/16.jpg'))

        books = booksDemoData.map(bookDemoData => {
            return {
                id: bookDemoData.id,
                title: bookDemoData.title,
                subtitle: bookDemoData.subtitle,
                authors: bookDemoData.authors,
                publishedDate: bookDemoData.publishedDate,
                description: bookDemoData.description,
                pageCount: bookDemoData.pageCount,
                categories: bookDemoData.categories,
                thumbnail: bookDemoData.thumbnail,
                language: bookDemoData.language,
                listPrice: bookDemoData.listPrice,
            }
        })


        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, price = 250, thumbnail = 'http://coding-academy.org/books-photos/1.jpg') {
    const book = getEmptyBook(title, price, thumbnail)
    book.id = utilService.makeId()
    return book
}

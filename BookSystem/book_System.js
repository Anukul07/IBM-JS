const books = [];
function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = document.getElementById('pagesNumber').value;
    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name : bookName,
            authorName : authorName,
            bookDescription : bookDescription,
            pagesNumber : pagesNumber
        }
        books.push(book);
        showBooks();
        clearInputs();
    }else{
        alert("Please input the values correctly")
    }
}

function showBooks(){
    const bookItems = books.map((book,index) =>
        `
        <h1>book Number: ${index+1}</h1>
        <p><strong>Book Name : ${book.name}</p>
        <p><strong>Author Name : ${book.authorName}</p>
        <p><strong>Book Description : ${book.bookDescription}</p>
        <p><strong>No. of Pages : ${book.pagesNumber}</p>
        `
    )  ;
    document.getElementById('books').innerHTML = bookItems.join('');
}
function clearInputs(){
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
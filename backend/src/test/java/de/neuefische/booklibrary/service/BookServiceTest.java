package de.neuefische.booklibrary.service;

import de.neuefische.booklibrary.model.Book;
import de.neuefische.booklibrary.repository.BookRepository;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class BookServiceTest {

    private final BookRepository bookRepository = mock(BookRepository.class);
    private final BookService bookService = new BookService(bookRepository);

    @Test
    void getBookByIsbn_whenBookExists_ReturnBook() {
        //GIVEN
        when(bookRepository.getBookByIsbn("1")).thenReturn(Optional.ofNullable(new Book("1", "IKEA Catalog", "IKEA AG")));

        //WHEN
        Book actual = bookService.getBookByIsbn("1");

        //THEN
        Book expected = new Book("1", "IKEA Catalog", "IKEA AG");
        verify(bookRepository).getBookByIsbn("1");
        assertEquals(expected, actual);
    }

    @Test
    void getBookByIsbn_whenBookDoesNotExists_throwException() {
        //GIVEN
        when(bookRepository.getBookByIsbn("1")).thenReturn(Optional.empty());

        //WHEN
        //THEN
        assertThrows(NoSuchElementException.class, () -> bookService.getBookByIsbn("1"));

        verify(bookRepository).getBookByIsbn("1");
    }

    @Test
    void getAllBooks() {
        //GIVEN
        when(bookRepository.getAllBooks()).thenReturn(List.of(new Book("1", "IKEA Catalog", "IKEA AG"), new Book("978-3-8362-8745-6", "Java ist auch eine Insel", "Christian Ullenboom")));

        //WHEN
        List<Book> actual = bookService.getAllBooks();

        //THEN
        List<Book> expected = List.of(new Book("1", "IKEA Catalog", "IKEA AG"), new Book("978-3-8362-8745-6", "Java ist auch eine Insel", "Christian Ullenboom"));
        verify(bookRepository).getAllBooks();
        assertEquals(expected, actual);
    }

    @Test
    void addBook() {
        //GIVEN
        Book dummyBook = new Book("ISBN42", "Hitchhiker's Guide To The Universe", "IKEA AG");
        when(bookRepository.addBook("ISBN42", dummyBook)).thenReturn(dummyBook);

        //WHEN
        Book actual = bookService.addBook(dummyBook);

        //THEN
        verify(bookRepository).addBook("ISBN42", dummyBook);
        assertEquals(dummyBook, actual);
    }

    @Test
    void deleteBook_whenBookExists() {
        //GIVEN
        when(bookRepository.getBookByIsbn("ISBN123")).thenReturn(Optional.ofNullable(new Book("ISBN123", "IKEA Catalog", "IKEA AG")));

        //WHEN
        bookService.deleteBook("ISBN123");

        //THEN
        verify(bookRepository).deleteBook("ISBN123");
    }

    @Test
    void deleteBook_whenBookDoesNotExist() {
        //GIVEN

        //WHEN
        bookService.deleteBook("ISBN123");

        //THEN
        verify(bookRepository, never()).deleteBook("ISBN123");
    }

    @Test
    void addBookByIsbn() {
        //GIVEN

        String isbn = "123";
        Book book = new Book(isbn, "test-title", "test-author");

        when(bookRepository.addBook(isbn, book)).thenReturn(book);

        //WHEN

        Book actual = bookService.addBookByIsbn(isbn, book);

        //THEN
        verify(bookRepository).addBook(isbn, book);

        assertEquals(book, actual);
    }
}

"use strict";
class LibraryImpl {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
    listAvailableItems() {
        return this.items.filter((item) => item.available);
    }
}
const bookLibrary = new LibraryImpl();
const dvdLibrary = new LibraryImpl();
bookLibrary.addItem({
    id: 1,
    title: "Book 1",
    available: true,
    author: "Hussein Khalil",
    pages: 180,
});
bookLibrary.addItem({
    id: 2,
    title: "Book 2",
    available: false,
    author: "Khalil Hussein",
    pages: 328,
});
dvdLibrary.addItem({
    id: 1,
    title: "DVD 1",
    available: false,
    director: "Christopher Nolan",
    duration: 148,
});
dvdLibrary.addItem({
    id: 2,
    title: "DVD 2",
    available: false,
    director: "The Wachowskis",
    duration: 136,
});
console.log("Available Books:", bookLibrary.listAvailableItems());
console.log("Get Book by ID:", bookLibrary.getItemById(1));
console.log("Available DVDs:", dvdLibrary.listAvailableItems());
console.log("Get DVD by ID:", dvdLibrary.getItemById(2));
class LibraryImplExtended extends LibraryImpl {
    borrowItem(id) {
        const item = this.getItemById(id);
        if (item) {
            item.available = false;
        }
        else {
            throw new Error("Item not found");
        }
    }
    returnItem(id) {
        const item = this.getItemById(id);
        if (item) {
            item.available = true;
        }
        else {
            throw new Error("Item not found");
        }
    }
}
const extendedBookLibrary = new LibraryImplExtended();
extendedBookLibrary.addItem({
    id: 1,
    title: "Book 1",
    available: true,
    author: "Hussein Khalil",
    pages: 180,
});
extendedBookLibrary.addItem({
    id: 2,
    title: "Book 2",
    available: false,
    author: "Khalil Hussein",
    pages: 328,
});
try {
    extendedBookLibrary.borrowItem(1);
    console.log("Borrowed Book ID 1:", extendedBookLibrary.getItemById(1));
    extendedBookLibrary.returnItem(1);
    console.log("Returned Book ID 1:", extendedBookLibrary.getItemById(1));
    extendedBookLibrary.borrowItem(3);
}
catch (err) {
    if (err instanceof Error) {
        console.error(err.message);
    }
    else {
        console.error("An unknown error occurred");
    }
}

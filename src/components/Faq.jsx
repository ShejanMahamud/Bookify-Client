import React from 'react'

const Faq = () => {
  return (
<section className="w-[90%] mx-auto my-20 grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-5 lg:gap-16 items-center" id="faq">
  <div>
    <img src="https://kontho.netlify.app/assets/faq-U7xls74s-U7xls74s.png" alt="faq.png" />
  </div>
  <div className="*:mb-4">
    <h1 className="text-4xl lg:text-5xl font-medium pl-3">FAQ</h1>
    <p className="text-secondary-text font-medium text-sm pl-3">
      You can explore some frequently asked questions about our library management web application.
    </p>
    <div className="collapse collapse-plus">
      <input type="radio" name="my-accordion-3" checked="checked" />
      <div className="collapse-title text-xl font-medium">
        How do I register for an account?
      </div>
      <div className="collapse-content">
        <p>
          To register for an account, click on the 'Sign Up' button on the homepage, fill out the required information, and submit the form. You'll receive a confirmation email to verify your account.
        </p>
      </div>
    </div>
    <div className="collapse collapse-plus">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-xl font-medium">
        How can I borrow books from the library?
      </div>
      <div className="collapse-content">
        <p>
          Borrowing books is easy! Simply log in to your account, search for the book you want, and click on the 'Borrow' button next to it. Make sure to check the due date for returning the book.
        </p>
      </div>
    </div>
    <div className="collapse collapse-plus">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-xl font-medium">
        Can I reserve a book that's currently checked out?
      </div>
      <div className="collapse-content">
        <p>
          Yes, you can! If a book you want is already checked out, you can reserve it by clicking on the 'Reserve' button. Once the book becomes available, you'll receive a notification, and it will be held for you to borrow.
        </p>
      </div>
    </div>
    <div className="collapse collapse-plus">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-xl font-medium">
        How can I renew my borrowed books?
      </div>
      <div className="collapse-content">
        <p>
          You can renew your borrowed books by logging in to your account, going to the 'My Borrowings' section, and selecting the option to renew next to the respective books. You can renew each book up to two times if no one else has reserved it.
        </p>
      </div>
    </div>
    <div className="collapse collapse-plus">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-xl font-medium">
        What should I do if I lose a library book?
      </div>
      <div className="collapse-content">
        <p>
          If you lose a library book, please report it immediately to the library staff. You may be asked to pay for the replacement cost of the book. Once paid, you'll be able to borrow books again.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Faq
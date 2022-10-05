    // <!-- Begin Script Buy_tickets -->

        const buyBtns = document.querySelectorAll('.js_buy_ticket')
        const modal = document.querySelector('.js_modal')
        const modalContainer = document.querySelector('.js_modal_container')
        const modalClose = document.querySelector('.js_modal_close')

        function showBuyTickets() {
            modal.classList.add('open')
        }

        function hideBuyTickets() {
            modal.classList.remove('open')
        }

        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets)
        }

        modalClose.addEventListener('click', hideBuyTickets)
        modal.addEventListener('click', hideBuyTickets)
        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })

    // <!-- End Script Buy_tickets -->

    // <!-- Begin Script Mo_menu -->\

        

    // <!-- Begin Script Mo_menu -->
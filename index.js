$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const newEntry = $(this).find('input[name="shopping-list-entry"]').val();
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${newEntry}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);    
    });

    $('.shopping-item-toggle').on('click', event => {
        event.preventDefault();
        $(this).closest('span').toggleClass('shopping-item__checked');
    });

    $('.shopping-item-delete').submit(event => {
        event.preventDefault();

    });
})
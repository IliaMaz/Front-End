
const actors = [
    {
        category: 'male',
        name: 'magnus jensen',
        picture: 'https://randomuser.me/api/portraits/men/29.jpg'
    },
    {
        category: 'male',
        name: 'richard bradley',
        picture: 'https://randomuser.me/api/portraits/men/95.jpg'
    },
    {
        category: 'male',
        name: 'eduardo martin',
        picture: 'https://randomuser.me/api/portraits/men/7.jpg'
    },
    {
        category: 'female',
        name: 'norah faure',
        picture: 'https://randomuser.me/api/portraits/women/11.jpg'
    },
    {
        category: 'female',
        name: 'rose clarke',
        picture: 'https://randomuser.me/api/portraits/women/28.jpg'
    },
    {
        category: 'female',
        name: 'adeline mathieu',
        picture: 'https://randomuser.me/api/portraits/women/6.jpg'
    },
    {
        category: 'baby',
        name: 'joe edwards',
        picture: 'https://randomuser.me/api/portraits/lego/5.jpg'
    },
    {
        category: 'baby',
        name: 'bob kelley',
        picture: 'https://randomuser.me/api/portraits/lego/2.jpg'
    },
    {
        category: 'baby',
        name: 'john doe',
        picture: 'https://randomuser.me/api/portraits/lego/1.jpg'
    }
];


for (const actor of actors) {
    let cardSection = $('#cards');
    const cloneCard = $('#card').clone();
    cloneCard.find('.card-title').text(actor.name);
    cloneCard.find('img').attr('src', actor.picture);
    cloneCard.addClass(actor.category);
    cloneCard.removeClass('d-none');
    cardSection.append(cloneCard);
    let actoClone = $('#actor').clone();
    actoClone.val(actor.name);
    actoClone.text(actor.name);
    $('#Actor').append(actoClone);
    $('div.card').on('click', function (event) {
        $('#Actor').val($(this).find('h5').text());
    })
}


$('#card').remove();
$('div.card').hide();
let males = $('div.card.male');
males.show(500);
males.on('click', maleFucktion);

function maleFucktion(event) {
    males.removeClass('blue');
    $(this).toggleClass('blue');
}
$('#maleBtn').on('click', function (event) {
    females.hide(500);
    baby.hide(500);
    males.show(500);
    $('#category').val('maleico');
})
let females = $('div.card.female');
$('#femaleBtn').on('click', function (event) {
    males.hide();
    baby.hide();
    females.show(500);
    $('#category').val('femaleico');
})
females.on('click', function (event) {
    females.removeClass('blue');
    $(this).toggleClass('blue');
})
let baby = $('div.card.baby');
$('#babyBtn').on('click', function (event) {
    males.hide();
    females.hide();
    baby.show(500);
    $('#category').val('babyico');
})
baby.on('click', function (event) {
    baby.removeClass('blue');
    $(this).toggleClass('blue');
})

// https://www.notion.so/Javascript-Project-0c2c5c4edb7c45f898fc1a0963e59d26



let todoArray = [
    { done: true, task: "start the exercise" },
    { done: true, task: "take a cofee" },
    { done: false, task: "finish the exercise" },
    { done: false, task: "do the bonus" }
]

const uL = $('#list');
let lI = $('#listItem');
$('h1').text('ToDo List');
lI.addClass('listEt');
showMe();

function showMe() {
    refresh();
    for (const todo of todoArray) {
        const cloneItem = lI.clone();
        cloneItem.find('span').text(todo.task);
        uL.append(cloneItem);
    }

    const moveList = $('#list').detach();
    $('.todo').append(moveList);
    $('.liID').on('click', oN);
    function oN(event) {
        $(this).next().toggleClass('balls');
        console.log($(this).parents().hasClass('todo'));
        if ($(this).parents().hasClass('todo')) {
            const bruh = $(this).parent().detach();
            $('.done').append(bruh);
        } else if ($(this).parents().hasClass('done')) {
            const bruh2 = $(this).parent().detach();
            $('.todo ul').append(bruh2);
        }
    }
}

lI.remove();


$('h1').after(document.createElement('h2'));
$('h2').text('Add New Item');
$('h2').after(document.createElement('form'));
$('form').append(document.createElement('input'));
$('input').prop('id', 'inpID');
$('#inpID').prop('type', 'text');
$('form').append(document.createElement('button'));
$('button').text('SEND');
$('button').attr('type', 'submit');

$('form').on('submit', function (event) {
    event.preventDefault();
    const done = false;
    const task = $('#inpID').val();
    todoArray.push({ done, task });
    console.log(todoArray);
    showMe();
})

let cloneman = $('h2').clone();
cloneman.text('ToDo');
$('section.todo').prepend(cloneman);

clone2.text('Done');
$('#sec2').prepend(clone2);


function refresh() {
    for (const it of todoArray) {
        $('.listEt').remove();
    }
}


// https://www.notion.so/Todo-List-Javascript-75f73254c1094727aee686b9e5262834
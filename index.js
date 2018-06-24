  $(document).ready(()=> {
    let qtoggle = new QToggle('question');
    qtoggle.mount(document.getElementById('app'));

    let qtoggle2 = new QToggle('check');
    qtoggle2.mount(document.getElementById('app'));

    let qtoggle3 = new QToggle('cross');
    qtoggle3.mount(document.getElementById('app'));
}
)
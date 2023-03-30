$('#btnSearch').click(function () {
    search();
});

$('#txtKey').bind('keydown', function (event) {
    if (event.keyCode == "13") {
        search();
    }
});

function search() {
    var key = $.trim($("#txtKey").val());
    if (key == "") {
        return;
    }
    window.open($("input[name='engine']:checked").val() + key);
}
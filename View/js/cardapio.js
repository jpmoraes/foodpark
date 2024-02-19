// Função para abrir o modal e carregar os dados do JSON
function OpenModal(imgId) {
  $.getJSON("./Controller/cardapio.json", function (data) {
    var content = "";
    if (data.hasOwnProperty(imgId)) {
      data[imgId].forEach(function (item) {
        content +=
          "<h3>" +
          item.name +
          "..............................." +
          item.price +
          "</h3>" +
          "<h5>" +
          item.description +
          "</h5><br>";
      });
      $(".ModalDescription").html(content);
      $("#modal").show(); // Exibir o modal usando jQuery
    } else {
      console.log("Não há itens de cardápio associados a esta imagem.");
    }
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log("getJSON request failed! " + textStatus);
  });
}

// Função para fechar o modal
function Close() {
  $("#modal").hide();
}

$(document).ready(function () {
  $("#caixa2-img1, #caixa2-img2").click(function () {
    var imgId = $(this).attr("id");
    OpenModal(imgId);
  });
});

function generatePDF() {
    var element = document.getElementById('forDownload');
    var opt = {
        pagebreak:    {mode: 'avoid-all'},
        margin:       1,
        filename:     'planet_pizza.pdf',
        image:        { type: 'png' },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait',precision: '12' }
      };

    html2pdf().set(opt).from(element).save();
}

function generateAlert() {
    alert("Welcome to Planet Pizza. Here is what you should know:\n-This page is a pizza recipe designed to be understood by aliens\n-This page is downloadable as a PDF via the download button\n-Click \"I'm human\" to redirect to more info and content");
}
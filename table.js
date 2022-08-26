let table = document.querySelector(".table");
(
    async() => {
        let workbook = XLSX.read(await(await fetch("./Only published work Aug 2022.xlsx")).arrayBuffer());
        console.log(workbook);
        let worksheet = workbook.SheetNames;
        worksheet.forEach(name => {
            let html = XLSX.utils.sheet_to_html(workbook.Sheets[name]);
            table.innerHTML += `<h3>${name}</h3>${html}`;
        })
    }
)()
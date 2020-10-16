const Database = require("./db");

const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  //insert data
  await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar das meninas",
    about:
      "Presta assistência a crianças de 06 a 20 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "908098908",
    images: [
      "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1574647258357-e19ec1bcc09c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1574647258357-e19ec1bcc09c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),

    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    opening_hours: "Horário de visitas das 12h até as 15h",
    open_on_weekends: "1",
  });

  //consult
  const selectecOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectecOrphanages);
  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  //console.log(orphanage);
});

const champions = [
    {
        name: "Ahri",
        image: "https://cdnb.artstation.com/p/assets/images/images/012/033/999/large/thomas-randby-npe-ahri.jpg?1532668669"
    },
    {
        name: "Alistar",
        image: "https://pbs.twimg.com/media/Erq4l2pXcAI4wzJ?format=png&name=900x900"
    },
    {
        name: "Amumu",
        image: "https://pbs.twimg.com/media/E0IwmxwWYAESUmi?format=jpg&name=360x360"
    },
    {
        name: "Annie",
        image: "https://1.bp.blogspot.com/-HYkRsvHf0qc/XajHR3EBsZI/AAAAAAABZ3A/ApN7Ysu-JScVu-yMjwF1yRzXXkCzFu7AgCLcBGAsYHQ/s1600/4379.jpg"
    },
    {
        name: "Ashe",
        image: "https://styles.redditmedia.com/t5_38897/styles/communityIcon_iz4elfm8v5d81.png"
    },
    {
        name: "Blitzcrank",
        image: "https://i.redd.it/i5oqmio91hy51.jpg"
    },
    {
        name: "Brand",
        image: "https://www.mobafire.com/images/avatars/summoner-icon-harrowing-burning-hunger-brand.png"
    },
    {
        name: "Caitlyn",
        image: "https://b.thumbs.redditmedia.com/bXlEUDDiSGDLjVP8_-qv4lU_SuQLbpTDq_Oj2xSsCOQ.png"
    },
    {
        name: "Dr.Mundo",
        image: "https://64.media.tumblr.com/365b40a8c7cbe72af39f434f99d6085d/a111ae3e4397254c-50/s500x750/a108d05668f7a442ed58d6acf435ae6f9f1d8978.png"
    },
    {
        name: "Garen",
        image: "https://preview.redd.it/5u3cchijozt21.png?auto=webp&s=7cb29beb9c5c9e1dec7a0bd7d782d2242806e2ee"
    },
    {
        name: "Gwen",
        image: "https://pbs.twimg.com/media/Exv9op9XEAAdHur.jpg"
    },
    {
        name: "Janna",
        image: "https://i.pinimg.com/originals/80/7b/af/807baf93a1486f07feb16cafba712c71.png"
    },
    {
        name: "Kayle",
        image: "https://pbs.twimg.com/media/DGz2oKZUQAEzNuC.jpg"
    },
    {
        name: "Leona",
        image: "https://64.media.tumblr.com/15beeb42fc35beeda5835de5846a7a3f/tumblr_phsoiv6f4v1vo6vclo2_400.jpg"
    },
    {
        name: "Lux",
        image: "https://i.pinimg.com/originals/11/00/a8/1100a8e5ee832d94b1cf62b61ff23c91.jpg"
    },
    {
        name: "Maître Yi",
        image: "https://external-preview.redd.it/Od5f5CtxQUZR-5atAshk0QAcpkXPuoQPePRSSZvLDgQ.jpg?auto=webp&s=84b42f8fdaaf7d440135153f8c7c690ae54c5e32"
    },
    {
        name: "Malphite",
        image: "https://i.pinimg.com/474x/b2/25/9a/b2259a83468dd0940f85e779f687c9d7.jpg"
    },
    {
        name: "Miss Fortune",
        image: "https://64.media.tumblr.com/db958cf95d2a4ee16174c57642c08f51/a40811e335401a95-c2/s1280x1920/c3216ee62445c43adda11d7b5441cd5a2ed63b0c.jpg"
    },
    {
        name: "Morgana",
        image: "https://external-preview.redd.it/XRDO17wTvq1-LC9Xxfc5g6BdsFw6xntHReTcqwSmyl8.jpg?auto=webp&s=f6d95ed21199b649c5c7eeb47a4f416235937997"
    },
    {
        name: "Nautilus",
        image: "https://external-preview.redd.it/P-crhReZbM6sxvE-USf--bJLBAOUpfmwHP4XlyT_Lkg.jpg?auto=webp&s=831c6970f45f09fca3c8b09681c8efc1328baf42"
    },
    {
        name: "Neeko",
        image: "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-reveal-neeko/fr_FR/b85d977b38b2c511e838a1b03ba51b581ce4f2af/assets/img/content/neeko/wallpaper/neeko-thumb.jpg"
    },
    {
        name: "Nunu et Willump",
        image: "https://preview.redd.it/micyjr78sa241.jpg?width=200&format=pjpg&auto=webp&s=0e67a78b0cfd323a930bf97e8d8abc582ce7e64f"
    },
    {
        name: "Pantheon",
        image: "https://64.media.tumblr.com/38ec37bc5bb6948edf5aa9ef05953041/686fea1fb8f09532-87/s400x600/5f45fd9429b45ff98d976e7f8d30f2e9035ab1e2.jpg"
    },
    {
        name: "Poppy",
        image: "https://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/4612.png"
    },
    {
        name: "Pyke",
        image: "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-champion-reveal-pyke-bloodharbor-ripper/fr_FR/ae1ec8345c64ed98cb8f38ec22b84b94c0ff2a59/assets/img/content/abilities/icon-w.jpg"
    },
    {
        name: "Ryze",
        image: "https://backend.slipix-progresser-sur-league-of-legends.fr/images/champions/ryze/ryze_head.jpg"
    },
    {
        name: "Séraphine",
        image: "https://64.media.tumblr.com/05011a35a93aa5391b1a58e6c37bfec5/9e1a7a2848b07549-88/s500x750/08faa743769badc331667c8bd8941e3023e5b2fa.png"
    },
    {
        name: "Singed",
        image: "https://64.media.tumblr.com/ca754468bebd097cb383db6e84c978ba/4acf0dc96f558771-9b/s400x600/a62611637c000bd43ff11b3aec426e78b80a1eb4.jpg"
    },
    {
        name: "Sivir",
        image: "https://cdna.artstation.com/p/assets/images/images/001/015/798/large/jessica-oyhenart-ball-sivir-ult.jpg?1438228174"
    },
    {
        name: "Sona",
        image: "https://64.media.tumblr.com/489492670cebf78948798c093459dff9/d896cb7df99e4ab0-be/s400x600/e558f121243b492d834ca032842bf0d7f7b3638f.jpg"
    },
    {
        name: "Soraka",
        image: "https://cdna.artstation.com/p/assets/images/images/024/910/772/large/jess-mercury-c-soraka-icon2.jpg?1583935801&dl=1"
    },
    {
        name: "Teemo",
        image: "https://3.bp.blogspot.com/-gs_swtm_WzY/W5loUyT0f1I/AAAAAAABHQE/CFnOaj22_9woSeFoelFo0JchbPMu7wMOACLcBGAs/s1600/3623.jpg"
    },
    {
        name: "Thresh",
        image: "https://i1.sndcdn.com/avatars-000447382782-0hxl2d-t500x500.jpg"
    },
    {
        name: "Tristana",
        image: "https://2.bp.blogspot.com/-RHIPvFu6YEE/XNsenODKYAI/AAAAAAABS5U/Zua0A_dnnmQV2a0-MSQw_H7XYkgwt5z4QCLcBGAs/s1600/4154.jpg"
    },
    {
        name: "Veigar",
        image: "https://i.redd.it/j6lfp3p1pus41.png"
    },
    {
        name: "Vex",
        image: "https://styles.redditmedia.com/t5_4bekd6/styles/communityIcon_pcrt5gd52oq71.png?width=256&s=168284f79416e0db96f2559f0d3c4e78724cbc45"
    },
    {
        name: "Warwick",
        image: "https://preview.redd.it/2uyj7hu2d4x31.jpg?width=300&format=pjpg&auto=webp&s=b00e9709faadbfa00ac2e04ffb3f9bcb88c302d7"
    },
    {
        name: "Xerath",
        image: "https://www.mobafire.com/images/champion/square/xerath.png"
    },
    {
        name: "Zilean",
        image: "https://www.mobafire.com/images/champion/square/zilean.png"
    },
    {
        name: "Zoé",
        image: "https://external-preview.redd.it/z19fmq7ZI7xL2tsSAUvfUad4dtx_AxrQYIWkBHuadn0.jpg?auto=webp&s=c0ef0589ad4aa6bee14f75ddc80566a6dae7f93e"
    },
]

const click = document.getElementById("click");
const name = document.querySelectorAll(".name");
const img = document.querySelectorAll("img");

let num1;
let num2;
let num3;

click.addEventListener("click", function(e) {
    e.preventDefault();
    num1 = Math.floor(Math.random() * champions.length + 1);
    num2 = Math.floor(Math.random() * champions.length + 1);
    num3 = Math.floor(Math.random() * champions.length + 1);

    if (num1 === num2 || num1 === num3) {
        num1 = Math.floor(Math.random() * champions.length + 1);
    } else if (num2 === num3) {
        num2 = Math.floor(Math.random() * champions.length + 1);
    }

    name[0].textContent = champions[num1 - 1].name;
    name[1].textContent = champions[num2 - 1].name;
    name[2].textContent = champions[num3 - 1].name;

    img[0].setAttribute("src", `${champions[num1 - 1].image}`);
    img[1].setAttribute("src", `${champions[num2 - 1].image}`);
    img[2].setAttribute("src", `${champions[num3 - 1].image}`);
});
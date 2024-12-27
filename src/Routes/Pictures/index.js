import React from 'react';
import PhotoObjects from "../../Templates/PhotoObjects";
import StyledRow from "../../Templates/StyledRow";
import StyledCol from "../../Templates/StyledCol";

const PHOTO_CATEGORY_OPTION_LATEST_PHOTOS_ID = 'LatestPhotos';
const PHOTO_CATEGORY_OPTION_PHOTO_ARCHIVE_ID = 'PhotoArchive';
const PHOTO_CATEGORY_OPTION_PAST_FLYERS_ID = 'PastFlyers';

const PHOTO_CATEGORY_OPTION_LATEST_PHOTOS_LABEL = 'Latest Photos';
const PHOTO_CATEGORY_OPTION_PHOTO_ARCHIVE_LABEL = 'Photo Archive';
const PHOTO_CATEGORY_OPTION_PAST_FLYERS_LABEL = 'Past Flyers';

const ALL_PHOTO_CATEGORIES = [
  {
    "id": PHOTO_CATEGORY_OPTION_LATEST_PHOTOS_ID,
    "photoObjectLabel": PHOTO_CATEGORY_OPTION_LATEST_PHOTOS_LABEL,
    "photoShoots": [
      {
        "id": "2025",
        "label": "2025",
        "description": '',
        "photoSets": [
          {
            "id": "0",
            "label": "",
            "description": "Halloweekend at Montrose Saloon, Chicago IL on October 25, 2024. Photos by Ruta Grigola.",
            "images": [
              "1409a9ba2d6bd70e1471578abaac8ada.jpg",
              "4e275757caa71a6f08bc4bcdc5477f69.jpg",
              "11bdc21146207297016ef9af67b7fa3b.jpg",
              "04e28352771e68b30cb95897a57f0281.jpg",
              "b1190df6bce295534b77cd5292bf3cb4.jpg",
              "47680ebc329a4f56758632ddfc9c9090.jpg",
              "80f310dc37ed13c6371114b89ef21765.jpg",
              "05533c05d165f64f86a3bb2bb57d6f28.jpg",
              "120444bb8cf6172e086a381d22986568.jpg"
            ]
          },
          {
            "id": "1",
            "label": "",
            "description": "Punk Rock Tacos #55 at Cemitas Poblanas in Villa Park, IL on 27 September 2024. Photos by Ed Kost and Ruta Grigola.",
            "images":
              [
                "9db4658c3bf2761b18a66e2e0fe9ac1d.jpg",
                "330fa91f961cf76c20dbb4aa9d525059.jpg",
                "f0bcfaa4cdbe81a1146fd9e5032b18f1.jpg",
                "437d237cd6aa72841fc6ec508fa8f3ed.jpg",
                "828bfe9e4d91bbca5ff61b5ed099378b.jpg",
                "b60e9185477e2125baaba47b9ab9c88d.jpg",
                "f2e4d93d2aa0e0fb3b85baa5cfc8e56c.jpg",
                "ada2abcfb78b5b4af45c6dc0a9307cfd.jpg",
                "4bd71c8650682b8d3c08768563205a78.jpg",
                "e01f8978b3b2c691b105a27f5ddbacd9.jpg",
                "d97500a6cdd8c47890623b5706fbea74.jpg",
                "d7d7d8adbb0da337571cfdc7dee50fce.jpg",
                "32710374decad5fae2332a579c786f48.jpg",
                "82f2a8812a200bf67b448aa9ab48940d.jpg",
                "bc93aaf96332858644efd319424525eb.jpg",
                "fd56b6bb01071146383716ade6097083.jpg",
                "5f8115b00a9d236961b147d076cd2a92.jpg",
                "db4ee3f57a66701f590c38deaccec676.jpg",
                "8d5c4121fd8f79f3c636cb1315993e57.jpg",
                "5fae1ffe58926649e6870438d1fc48e7.jpg",
                "601bfe015e0bc2874e2043cbec794dcf.jpg",
                "6e49ca1dbb545c6186675b66f204a815.jpg",
                "95ce65d3d7c95777590ce7b588aceeb6.jpg",
                "9c89be80d4c652d12a69535fc99e7e76.jpg",
                "5ad140e9db47bf43390d0ed61cf477b8.jpg",
                "78be14363d59d2f8fc6d3aa85430a8d5.jpg",
                "659cc80baedc4ffefd30503680c5f06c.jpg",
                "3e8c53b4021096268c98bda60fa76fe6.jpg"
              ]
          },
          {
            "id": "2",
            "label": "",
            "description": "Milwaukee Polka Riot at Last Rites in Milwaukee, WI on 7 September 2024; Photos by Ruta Grigola.",
            "images": [
              "4e97cdde89d17d1c5df65bad74e1e89c.jpg",
              "3c6279af0de04b64a74d160dd75a1c75.jpg",
              "edbb9843274c68aad76fbc93cd7a0c1a.jpg",
              "90751218dc40197bbd1d6df92fceaaa2.jpg",
              "19115e7bd1322469eb2ca325670e5ce9.jpg",
              "35ed945ba5bb804a487339c0c95dbf20.jpg",
              "3cec3f11b82fd72ffaf402ef1a1deb62.jpg",
              "3c45c5ad9fcbc1f25e3aaf4ca1bb38e5.jpg",
              "a32b24641db09a1384a612f4c54669c3.jpg",
              "5089d792723ea5e5014c4a3e372fdbd5.jpg",
              "f48e4efd86439cff1ff3e9c3d1738895.jpg",
              "84c205d543775911de3d0fd3c3965c5d.jpg",
              "cb0e7ae265d048ea6c6c8c7932ad403e.jpg",
              "cb0513d4d20826735133e9e439d4fa3c.jpg",
              "1c55d2ec56effa19f2379d0cf088f591.jpg",
              "bfb17499919911ccd8f2e27dc45ecd06.jpg",
              "f801258a03e46c7eefbc3ce7ebe64f4a.jpg",
              "c15a910b44568ca95d5a51a85183195c.jpg"
            ]
          },
          {
            "id": "3",
            "label": "",
            "description":
              "Heroes West in Lemont, IL on 7 August 2024. Photos by Ruta Grigola.",
            "images":
              [
                "39aeffdd447a4fa337103ce7408bde1f.jpg",
                "d7ab5302b80610118958755f56eddb58.jpg",
                "f7a2b038220c734cc00e96be170f4148.jpg",
                "700f89f35dc7d5c7f8596194f70f3aee.jpg",
                "0ea8a4c240e35c4826c49be40b6b1f70.jpg",
                "419f25459b19a56bb688993b18e5757e.jpg",
                "35d146c3b7220f3bc40cdf89d872b3cc.jpg",
                "63710cc8d66c4f325db8d0aa60fe3558.jpg",
                "b6d7c73ac7adbc767f527e27be87a7d6.jpg",
                "067d4782cf39faeff4440082d5b88e95.jpg",
                "ccd7c079cfc434aa945039a652197e59.jpg",
                "9ef40d4b511fdf1855664a58f41c8a9f.jpg"
              ]
          },
          {
            "id": "4",
            "label": "",
            "description":
              "Cubby Bear Lounge in Chicago, IL on 13 July 2024. Photos by Ruta Grigola.",
            "images":
              [
                "b795606d0cf878ff4c836a2bb46942c1.jpg",
                "aa9d511911cf7a1bc57b26a124449265.jpg",
                "7fe8fb3cee7466e746f51acf89ac1bf0.jpg",
                "74da76d3d26058c55e2c3287a747ba9a.jpg",
                "c11701601e37ec3706b6c7c4ecd39d56.jpg",
                "84def42fca76d28e3a572689fed19d45.jpg",
                "bfdc2f76d3acc154a4b0f1f25675efd3.jpg",
                "e48f8e96d8f580fdf326717c4ff6cbba.jpg",
                "07c9c928a9090248188f2b396ba35e46.jpg",
                "078e0f23c6ee287f36800477771e43c9.jpg",
                "8fa0ea5d6bdf919e84d0b491c59f2171.jpg",
                "7bf50a2b2175b9e9fc453f31797fabf9.jpg",
                "041c731bb349dc2bd2e0bd71366770d8.jpg",
                "9038af1746f1ab288e7584d5e8b8afbb.jpg",
                "0c907d641766199078b41df30ec99572.jpg"
              ]
          }
        ]
      }
    ]
  },
  {
    "id": PHOTO_CATEGORY_OPTION_PHOTO_ARCHIVE_ID,
    "photoObjectLabel": PHOTO_CATEGORY_OPTION_PHOTO_ARCHIVE_LABEL,
    "photoShoots": [
      {
        "id": "1980",
        "label": "1980",
        "description": '',
        "photoSets": [
          {
            "id": "0",
            "label": "",
            "description": "Old School",
            "images": [
              "a1e9dba0bb7adecad8c6d337520893a8.jpg",
              "7358f0653a228160c87c7b825e030c52.jpg",
              "c05a885d08f3bc64e3b0b56873845e1b.jpg",
              "acc68a74d70a1a18feb30affd6308315.jpg",
              "940456035b1aebee8304853d89fc721f.jpg",
              "f126f1c2809f93f277152d0608f318b6.jpg",
              "118f15229a48539f1d165872be9caa1e.jpg",
              "36ebb6918d2c049e0be7c2bf220a9883.jpg",
              "d96c71e6268de0d60f2d729e3ee55f7d.jpg",
              "88ea4019a011755acc9a1d708eb057c1.jpg",
              "3dc8b3d353868b13f22e62290be96992.jpg",
              "56123d14ba45e14da2a20fc712384f25.jpg",
              "5e04d3c0f5ad44c29d649eff8c428499.jpg",
              "80f1c0e34550b5db8373c7c7cee6aedd.jpg",
              "c55f7f3b466bdc7ee7c52026d99ef0ba.jpg"
            ]
          }
        ]
      },
      {
        "id": "2012",
        "label": "2012",
        "description": '',
        "photoSets": [
          {
            "id": "0",
            "label": "",
            "description": "Youth Night, Lemont, IL 2012. Photos by Vytenis Lietuvninkas.",
            "images": [
              "2b989997392d5e8d76f7e4340b939400.jpg",
              "9d4a8c4fb072338ba1f5b287bbec68c8.jpg",
              "62a146d98305b1a0a6dae3a844540549.jpg",
              "52706591b1aaae93268928f0660b48a9.jpg",
              "4b094ab0b1b37dafb9ee60d85fcb7ec7.jpg",
              "b8e1f309d6a90f79443d6d1344548480.jpg",
              "8bca06d08821f603fbf9b95c785d2988.jpg",
              "5f9c303f099e6a90f5c71c7a4083e6b5.jpg",
              "3adacde033832621aacbc65a64a425c5.jpg",
              "98831b1b41c0f0bc5d79b3a7e31e6c49.jpg",
              "b39f307b19f1f3c97f5fbfaaeece3014.jpg",
              "1cbc32d8f0977fbb2b53793b78de4df0.jpg",
              "bef5face0c271d790a8fd4f4fba0c85c.jpg",
              "1e8824b95b0f95396b5c6623456ba1df.jpg",
              "fb7d68f9cf8505d95731f85a17796799.jpg",
              "06305232c344a7874de65d2eabd3a448.jpg",
              "7d16b60e85a6e5f2f7ec121f68b83a3c.jpg",
              "b3de7b9c5d8f836d96504243138fb449.jpg",
              "b35870415107cb7c0c000703f1655078.jpg",
              "921547064048529237f886cfb61b62ce.jpg",
              "6c49577807aebf82e693026a26d0f03c.jpg",
              "ecc9c41aa9158db672245107abaf8154.jpg",
              "8132e63227ad4ef82ca8a2f6a44531e9.jpg",
              "2b8448071bd5107ea9317e414d7e4283.jpg",
              "994768db001011861602d07c07856929.jpg",
              "f69b5c5bc29c07d088ccdbb7271a0a5f.jpg",
              "6a32c0772815c64c5d34e9b92ab64aa7.jpg",
              "c8fd718bb9fff63d01a82de5954ffc6f.jpg"
            ]
          }
        ]
      },
      {
        "id": "2013",
        "label": "2013",
        "description": '',
        "photoSets": [
          {
            "id": "0",
            "label": "",
            "description": "Youth Night, Lemont, IL 2013. Photos by Vytenis Lietuvninkas.",
            "images": [
              "8180f7ddb9c970b025a3c37bb511f178.jpg",
              "a9bc07bcd191c1f3394b0d02c518e504.jpg",
              "bffd696270b1ec8369c79ceec40e1e81.jpg",
              "f560ffd17ae8a3cae20d0a6f6c1952cb.jpg",
              "c759824e39c034a201c56bfa786f3d75.jpg",
              "be3b442663eb7624486d6bf4e996f2a1.jpg",
              "8ac47a22121fa89208ed2ceebc939a47.jpg",
              "dfc6034578d2b3b8c037a759c8ff3881.jpg",
              "8c0900acc373a4c67633da014bf450de.jpg",
              "c9a0de8998745168da4242eb132946eb.jpg",
              "14f075caa68a8da3baf257f80218678c.jpg",
              "3a0f14491e5e0402f76186c06cb93f9e.jpg",
              "fa44d4a22f237bd71f69ccdc7af16108.jpg",
              "932543bb6ec7823bae28360a22eb5300.jpg",
              "21cd79f7b0b938a8bd2d2c1cbf65b255.jpg",
              "9439128857ac18552b65a832a7f73f44.jpg",
              "3ea51e30f3ece21aca4099664c87fc7e.jpg",
              "ef748e0d70a8163f20a18093bdbc7498.jpg",
              "10f3ab904015a927e0f64d1177680767.jpg",
              "ce379bc8f81ea7fc17d2eee06b068fef.jpg",
              "2e0da2c08837705816037c4afb585432.jpg"
            ]
          }
        ]
      },
      {
        "id": "2014",
        "label": "2014",
        "description": '',
        "photoSets": [
          {
            "id": "0",
            "label": "",
            "description": "Photos by Kazys Motekaitis",
            "images": [
              "7ddb7dfacc89dd283f56b8ab28f56e18.jpg",
              "b165abaedca2c8b80cfc653230a93feb.jpg",
              "07a4234ec1c91b503882b7050248d89c.jpg",
              "69570c9c43a4ec9b80f3b98f73039411.jpg",
              "6c6d21c348c9697f5684cc7aaf69058a.jpg"
            ]
          },
          {
            "id": "1",
            "label": "",
            "description": "WXAV Studios, Chicago,IL. Photos by Ruta and Jonas Grigola",
            "images": [
              "fa8c8127ee557512e3394d3ca155cf07.jpg",
              "0c8f9680492e6da797bbbc06751bd040.jpg",
              "6b87da12456026fbb3b3d5f83cc71ffb.jpg",
              "dbdb183cebc8991bfe196741ad501217.jpg"
            ]
          }
        ]
      },
      {
        "id": "2015",
        "label": "2015",
        "description": '',
        "photoSets": [
          {
            "id": "0",
            "label": "",
            "description": "Evenflow, Geneva, IL. Photos by Regina Ramanauskas and others.",
            "images": [
              "557785a500596a94241c37403ad375c2.jpg",
              "8cf1d241d9489bc378e52f68ed08b2b4.jpg",
              "05a55cc1ec26c98423564a86d0d18f69.jpg",
              "d0a56d274097e021d82c9feba72c000a.jpg",
              "d1eeb626f934bca967b9aeef54293236.jpg",
              "7cabcd4183d13cfad769c8aa8e2ca47f.jpg"
            ]
          },
          {
            "id": "1",
            "label": "",
            "description": "Smiler Coogan's, Chicago.  Photos by Vytenis Lietuvninkas.",
            "images": [
              "0ffc64152b11784bfce94c29c700798b.jpg",
              "654cc33f7611ac103de721e531ad4d89.jpg",
              "9fb890e850a56a8f7650c0139442ca2a.jpg",
              "8c87a62defaafb998cd176c5ab699dab.jpg",
              "8c8e24848afda79bf8613c7948a2b795.jpg",
              "2a0842fc65adae6e07e32a8360580a5e.jpg",
              "33d775d1848619db7cb7585820b1fa9d.jpg",
              "7722f04b572a9958981209811dab0181.jpg",
              "9283a05af255b15e207887a759300dab.jpg",
              "f217a497b07622edc0236eb9c8c6812c.jpg",
              "952041e7d20cfbb367a554114155ab18.jpg",
              "c61be7c7c1354aaa78e86a24a2227c12.jpg",
              "baa456882591b0eb3d3ae0b6cb1931fd.jpg",
              "8b53bd205244fbe882d91ca735e2e715.jpg",
              "dce53f8a3328c4f84aae09f9b491a19f.jpg"
            ]
          }
        ]
      },
      {
        "id": "2016",
        "label": "2016",
        "description": '',
        "photoSets": [
          {
            "id": "o",
            "label": "",
            "description": "Red Line Tap, Chicago.  Photos by Vytenis Lietuvninkas.",
            "images": [
              "fe5c1f7c079d1587d989e185586c75cb.jpg",
              "b1f4e7dfd01bc717ee23898d5f9e7431.jpg",
              "f02cb8b5e66ef00a99c32cf96cf7146f.jpg",
              "b4e548da1ea16a2e456b021cef345ce1.jpg",
              "6b93f3d7d7a91379cdf79c70df6094d6.jpg",
              "16d975322d6711705a42a54b47b98bbc.jpg",
              "aa524de12fc3ca3f7c6ef10176e45675.jpg",
              "863ae66c77a64b5d0060571c8057dad1.jpg",
              "e7e635d0514228b9cda298f66dae15b6.jpg",
              "641218851eda013937a81bb9d4dd7c9c.jpg",
              "231e65d74a2ba98c0afb341847d29bc2.jpg",
              "2426750aeeb13e8ddf1aa53126fcbd41.jpg",
              "c3a19fbf4e6a45c00b83ed9a2934c0a7.jpg"
            ]
          },
          {
            "id": "1",
            "label": "",
            "description": "Silvie's, Chicago, Photos by Julius Lietuvninkas.",
            "images": [
              "c2b141b3061d9ac82b7cbc8ed2000dc5.jpg",
              "bc8389c18564e42e4a47f09fe0383e30.jpg",
              "3a3ac923b03235879e0ed5c680f87c1c.jpg",
              "43908fd656ed871168508d155acce912.jpg",
              "36911df999240dad4b3ff294f23bfb66.jpg",
              "f6055130c859f88fe236b8f022ae3e7d.jpg",
              "be2dffb04289b9df9f0fc9acaa2e01e0.jpg",
              "11e2999e1083bd8ea26c68e1eac6658e.jpg",
              "7ea1dbe7008466d3227d5faa066f6645.jpg"
            ]
          },
          {
            "id": "2",
            "label": "",
            "description": "Livewire, Chicago. Photos by Vytenis Lietuvninkas.",
            "images": [
              "ab473a51af1c005dfe2612d6f9f1d943.jpg",
              "991d7655b868d4061978976d4d5cac19.jpg",
              "e8783a9548c57f4d7c6ef3911147abfa.jpg",
              "c4220186520e502f647ff368dbe6cee6.jpg",
              "e7e635d0514228b9cda298f66dae15b6.jpg",
              "227a81708450362372303aac49a1c538.jpg"
            ]
          },
          {
            "id": "3",
            "label": "",
            "description": "Bricktop Studios, Chicago.",
            "images": [
              "69a7f3d1e898176e3f9731239005f0ce.jpg",
              "10e180824bff44ec4d9eed3549c0e7d7.jpg",
              "6ab1a7be37015e6fdd7bfb5c69d7d5cc.jpg",
              "d089909d03a0383d044d37bed8597033.jpg",
              "9f7be2308b8a42bf2ecff6a355a14ee0.jpg",
              "c56114d1f277cc835c06fb9dc8aef2ea.jpg",
              "6b132807f811bd41927f2d4d465dd1b9.jpg",
              "4adb5f0ee683e1d197a71a8fca505350.jpg",
              "54de1bed1d814bd05b912e6c2c2c0d2a.jpg",
              "2e8c3a61cf2b5bdfa4d7b7e456658dd8.jpg",
              "d9a1405794498e22f429f1d2d671c228.jpg",
              "18d24002d99e205afe3784691eae51d0.jpg",
              "a6f4b79e1c313ce63460b167f488f442.jpg",
              "f1a1c673ee805af2dbe37f1822e11a48.jpg",
              "2d18ee3335bca366f9f15cec5ffacdfd.jpg",
              "71551edc34b1467428e379580d12408e.jpg"
            ]
          },
          {
            "id": "4",
            "label": "",
            "description": "Underground Lounge, Chicago, IL. Photos by Joe Nagle (except for first one!)",
            "images": [
              "5b614038758b68ea5f2259196e03643e.jpg",
              "be5162e95b6f4366918b509b759daa88.jpg",
              "8a5a9fb23e3be3830ac651d3249aa017.jpg",
              "8150f3ea50af06c6964b2ab4e513e7b6.jpg",
              "5f5b778b0ff260dc4832e8691870700d.jpg",
              "c5c03f7cdf1660384957a99f89a24043.jpg"
            ]
          },
          {
            "id": "5",
            "label": "",
            "description": "The Mutiny, Chicago, IL. - We are lookign for more pictures from this show! Send to info@deadfreddie.com.",
            "images": [
              "c3a0016ad6a429c80efe741e6841aaa2.jpg",
              "c40a3ec611b6a2d76c2020df04e44227.jpg",
              "9092995cd46614b27757ab8a81d221a3.jpg",
              "a466c29bb2334d1d8c97dd96d48eb1ce.jpg"
            ]
          },
          {
            "id": "6",
            "label": "",
            "description": "American Music Festival at FitzGerald's, Berwyn, IL",
            "images": [
              "203feb0809edaf8ea1fbeacd57e6e4e3.jpg",
              "057b0480184efb1e63d67e3578b94a59.jpg",
              "9e86b0fe74ab7d70aa395c8877119955.jpg",
              "ec80d3a50a5b0111c71c0b303e455a17.jpg",
              "cffa0b1d7fa5c753e119acc9533ae212.jpg",
              "6592e97ab5c68562a7b078b7735c8958.jpg",
              "f17d5e63086ca88facfbb6f1f5532631.jpg",
              "2fa51ba71baafa200b37514c1c9cdcdc.jpg",
              "62eac608c65a83fce53f9a9898a84528.jpg",
              "2295320f28cef0ba596967bf845269f1.jpg",
              "cd29bd067fb4fea34bff5b365b019828.jpg",
              "4d9889446886b3b2a4463b0f146818c2.jpg",
              "9ad0c647e4d1842c914b7453e26daf7e.jpg",
              "c59d247ee81dd77eb3f1736983c9e667.jpg",
              "7df328b8af4760b44dbc9d66711fcc7e.jpg",
              "61dd9924c466d90e9df1f90903e48882.jpg",
              "7fd22fb7bfe9c5d8cf3632e9945933e4.jpg"
            ]
          },
          {
            "id": "7",
            "label": "",
            "description": "Beachland Ballroom Tavern and WJCU Radio, Cleveland, OH",
            "images": [
              "b31ac20a7d3f3cfa8a49b042e29ad06a.jpg",
              "f6122f8e27e745f49487f68c58b456a7.jpg",
              "b769593f91632475828f6aae9c5de2b6.jpg",
              "815a8501d99f93906adcf70de6b6fe1f.jpg",
              "d69d15588d9665e22a7d98f03157850f.jpg",
              "b1b78fa2fccdde0d49a878f3fd2bb76a.jpg",
              "6334949e2aeb497c83dadea1083ac0d6.jpg",
              "e00f69c0f931631e062a7bdfcde46ab6.jpg",
              "a720c0dbe28ec243a101c574b3c36abc.jpg"
            ]
          },
          {
            "id": "8",
            "label": "",
            "description": "Cairo Ale House, West Chicago, IL. Photos by Vytenis Lietuvninkas",
            "images": [
              "7192a8674f3898ce1ecaed3859365623.jpg",
              "f6185b1e0a3126d01483fc891ed925f0.jpg",
              "558663f2f8815262b9405fe0dee0e6f3.jpg",
              "224c8f3d12d412bc5f0119ffb43d2c79.jpg",
              "f92532e2d4dc64569187d030fcd70b03.jpg",
              "4cf3ed22076a7d7304316a300a755c7b.jpg",
              "6d799ac02afa3d8401ebc017d8903cb4.jpg",
              "f027f9a3283bae65e1be63ce1edc2921.jpg",
              "57deff2d5c0eff4d346f1016211a1aaf.jpg",
              "0c2adc667c72efe23a799b5e7160d210.jpg",
              "f0254be5bfd81b2dc8c9bc0fdfb82d8a.jpg"
            ]
          }
        ]
      },
      {
        "id": "2017",
        "label": "2017",
        "description": '',
        "photoSets": [
          {
            "id": "0",
            "label": "",
            "description": "Mardi Gras, Lithuanian World Center, Lemont, IL.  Photos by Vytenis Lietuvninkas",
            "images": [
              "508ce5ff2a99551e6e05a25158eb7ef6.jpg",
              "a0a8f70afa744ca0daac305f96dd331f.jpg",
              "c1cfbd601719ed623675151eb4ef1d40.jpg",
              "d9f6b0f193479b43f29ede52f4421418.jpg",
              "9253c614f8054087444cb1a93ceb9a5e.jpg",
              "3cbf2f357b716be5eeea9d1af61e3be3.jpg"
            ]
          },
          {
            "id": "1",
            "label": "",
            "description": "Reggie's Rock Club, Chicago, IL.",
            "images": [
              "32b42b00dbd2f8070d073f9d3c94599d.jpg",
              "1c1892e1eede3ad6a6d0e0e447bbf431.jpg",
              "bda4a446c7e84a9a178acb95fe206b4d.jpg",
              "8d47303f3a8c128cf9607e106c585e22.jpg",
              "02afcd87823fe874883784587f91ef62.jpg",
              "abbf3cbc7b2747d5b18344a01875efe1.jpg",
              "afb6b5149e7b9f00ecbdd730d6ba106a.jpg",
              "065f92000b0dd5faadd4e0ff875cff24.jpg",
              "2dcafa8fbdb087537466244661ad8269.jpg",
              "43249efaffb6057304bcb54ac64d23d8.jpg",
              "6efe7818c02d96c91f36836a593e2aa5.jpg",
              "2f72b1a6ef439a5f47c69c38c489a50e.jpg",
              "2ab28fbd3e8ca1d143b9a65e81690903.jpg",
              "407a38a7291b620121e4834d03f17862.jpg"
            ]
          },
          {
            "id": "2",
            "label": "",
            "description": "Val's Halla Records, Oak Park, IL",
            "images": [
              "eb8061730c7d79043171962fecd7c4bc.jpg",
              "2f0ca6589254f2b9bf4b5b4b3493ee10.jpg",
              "c5208708c81b8d7f0f2ffdc2d9587c24.jpg",
              "a07d5758b76a082baa38458588a6fea8.jpg",
              "43bb8854acff4fd8bdd2609affe8f814.jpg",
              "c343a1d327a9297299fa327474f33dcd.jpg",
              "9f867755bfcbb399d7fc3c359ca617f1.jpg",
              "1818ba45fc03a00585d0004908a33081.jpg",
              "2786b663a46b4e4c57b3d3ddaaea6b77.jpg",
              "305b753a071a3d7065d2c977f7156336.jpg",
              "9bc1067e726299c3ab4af6c69fef9476.jpg",
              "14c35c410ebaa41d96bc7cd4042e97c5.jpg"
            ]
          },
          {
            "id": "3",
            "label": "",
            "description": "WXAV, Chicago, IL",
            "images": [
              "4fb5850b7b3eb84614381abcd81273bc.jpg",
              "c3bf21663a03bf21bf3c9c1b9ec08f78.jpg"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": PHOTO_CATEGORY_OPTION_PAST_FLYERS_ID,
    "photoObjectLabel": PHOTO_CATEGORY_OPTION_PAST_FLYERS_LABEL,
    "photoShoots": [
      {
        "id": "All Past Flyers",
        "label": "All Past Flyers",
        "description": '',
        "photoSets": [
          {
            "id": "0",
            "label": "2015-2025",
            "description": "",
            "images": [
              "0543f81917361f8eec26c3daa6a80258.jpg",
              "f9398b284a7c9130a451db3556f2c6d1.jpg",
              "986bb55bf797c97ba72b6d29893d1595.jpg",
              "12b838d1e1376a62498f7b1c5ca04689.jpg",
              "2ee04b86e9635596c46caf80fac75ea7.jpg",
              "282511871a69897a6d5c2d5b338d5427.jpg",
              "fabe5d06955468a0de8a10eecbe64aa9.jpg",
              "b4ccb5ef7f7a42925e3eceebb8573721.jpg",
              "6517ac2d7695a0661f4ca5e35132c405.jpg",
              "6352eafb46e2635e2b1f7e599d87fe97.jpg",
              "9bff886b19473dccb2b6165b2f7c2b44.jpg",
              "d475e6521979058043883d3b3ad5ada8.jpg",
              "5e8eea5bf58f909ef4fd31fb66df4742.jpg",
              "b4a46c08aab4527c503d5a48d0b9bec7.jpg",
              "3892bc874151cf0e57aa84377f82ea25.jpg",
              "49404033921eda8827f3b02aed014a17.jpg",
              "b754a41e0250904eb24e86513403bda2.jpg",
              "25a37fefa2d4ec3db05a7a8abdb5fc52.jpg",
              "91c4891706cc0e2cdf0ec30d3b23cb5c.jpg",
              "0cb956024e68c537710e7d34a2964ff3.jpg",
              "f1cb063d403971dcb142462ac7c7fda0.jpg",
              "3f45c5c1da859b0e31ceb0181f5c378f.jpg",
              "96f1feae7cb2cd0c231aa4a995a75c6d.jpg",
              "e0875b0ca84a97d1bcb29edec2af362f.jpg",
              "ed2a7560670d8d2feebd9196e25574ba.jpg",
              "7b488616098609565a807ad293df0c6d.jpg",
              "cf2f867fcd1d499a23cb96e38d6ebd20.jpg",
              "0879ad74b8928858407b4bb27311d085.jpg",
              "91c56173929050a73a5af099b0ad9b8e.jpg",
              "e95b0bb9c9ff5c24f3c786caf6f18245.jpg",
              "3ec9aa83a011d0e0c2f86adcedd446c4.jpg",
              "06091aa07ee6534b0d36f90a6c944c52.jpg",
              "da23ccdbafe6cb29e96bd047abfb1f69.jpg",
              "efa0a9466f7abbf34cc33a1cb9735c1b.jpg",
              "ec70ca762a79f128019f91b0f497fe88.jpg",
              "413b982092fb460b60619cf2bcd0b393.jpg",
              "32e11ed424a819864918900e86fc189a.jpg",
              "d17ccd837f6040ae44d8827c2ccf9f2c.jpg",
              "cace7391a25eb175deffa75598f5ee18.jpg",
              "d6b15d88268f510a208132efa8db9d48.jpg",
              "ba50597f1e2d345ff823bd3233c29123.jpg",
              "49cfb2774eadc97c6783b291b4f0cd67.jpg",
              "d0db545aec22bb95f87a9a7f2d92535e.jpg",
              "1d2337d3e479c7ccacd70f8ae26701b0.jpg",
              "f629138f0d643602699aad8096cc21b3.jpg",
              "56969c12b550decee03f207f0251848c.jpg",
              "d5c59c437e76a1053b0ec92466d7ae08.jpg",
              "4d26d0fb7aa9c608c4a3db5594e31a63.jpg",
              "beaf2d8905f365f5df8bdba12a0dfcfe.jpg",
              "339f9515ac12fbcdfb1dd5b8b0d16c6c.jpg",
              "55a8fae79fcc1cfdbfd9628eab7e68f3.jpg",
              "f549504a993c1b1b676e0e1aeb68c712.jpg",
              "8663a81d17c8b30460cd276ff3bec730.jpg",
              "b2076ccc73cbf852cfbc88fd8ae08e94.jpg",
              "7af455e735fc4e7a7a9cd9ce6e728c26.jpg",
              "458754a42d7c3ee0c2358fcd692180df.jpg",
              "09d00b6f00831066727281a27afa9959.jpg",
              "539aaad346b066a92319b0f1f409ea5f.jpg",
              "f5e0c03480df37474b25ed3b30b7a59c.jpg"
            ]
          }
        ]
      }
    ]
  }
];

function Pictures() {
  return (
    <StyledRow>
      <StyledCol title='Photos - Select a gallary to get started.'>

        <PhotoObjects
          ALL_PHOTO_CATEGORIES={ALL_PHOTO_CATEGORIES}
        />
      </StyledCol>
    </StyledRow>
  );
}

export default Pictures;
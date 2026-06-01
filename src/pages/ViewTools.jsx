import React from "react";
import { useState, useEffect } from "react";
import Gadget from "../components/Gadget";
import { uuidv7 } from "uuidv7";
import '../style sheets/Gadgets.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ViewTools() {

    const [handheldGadgets, setHandheldGadgets] = useState([])
    const [everydayTools, setEverydayTools] = useState([])
    const [countertopAppliances, setCountertopAppliances] = useState([])
    const [trendingGadgets, setTrendingGadgets] = useState([])
    const [page, setPage] = useState(0);

    const createData = (tool, alternative, explanation) => {
        return { tool, alternative, explanation };
    }

    const columns = [
        { id: 'tool', label: 'Missing Tool', minWidth: 170 },
        { id: 'alternative', label: 'Try This Instead', minWidth: 100 },
        { id: 'explanation', label: 'Note', minWidth: 100 },
    ];

    const rows = [
        createData('Rolling pin', 'Wine bottle or tall glass bottle', 'Smooth bottles apply even pressure for rolling dough'),
        createData('Whisk', 'Fork', 'Great for eggs, dressings, and small batters'),
        createData('Colander', 'Pot lid', 'Hold food back while draining water from the pot'),
        createData('Measuring cups', 'Mug or drinking glass', 'Consistent ratios often matter more than exact size'),
        createData('Measuring Spoons', 'Regular teaspoons/tablespoons', 'Everyday cutlery works for simple recipes'),
        createData('Citrus juicer', 'Fork + hand squeeze', 'Twisting a fork helps release extra juice'),
        createData('Mixer', 'Wooden spoon', 'Good for simple batters and hand-mixing'),
        createData('Food processor', 'Sharp knife', 'Chopping manually works for most vegetables and herbs'),
        createData('Potato masher', 'Large fork', 'Mashes potatoes, avocado, or beans easily'),
        createData('Pastry brush', 'Paper towel or spoon', 'Spread oil or butter across surfaces'),
        createData('Pizza cutter', "Chef's knife", 'Cuts flatbreads and pizza just as well'),
        createData('Grater', 'Vegetable peeler + knife', 'Creates thin strips for cheese or vegetables'),
        createData('Salad spinner', 'Clean dish towel', 'Wrap greens and shake gently dry'),
        createData('Cheese shredder', 'Knife', 'Thin slices or small cubes work in many recipes'),
        createData('Tongs', 'Two large spoons', 'Lift and flip foods carefully'),
        createData('Ice cream or cookie scoop', 'Large spoon', 'Similar shape for scooping dough or batter'),
        createData('Rice cooker', 'Covered saucepan', 'Standard stovetop method works well'),
        createData('Kitchen scale', 'Measuring cups', 'Less precise but fine for everyday cooking'),
        createData('Meat thermometer', 'Visual check + timer', 'Less accurate but workable for experienced cooks')
    ];

const basicProducts = [
  { label: 'Editor’s Note', title: 'Start simple, cook often', body: 'The best kitchen setup is not the biggest one — it is the one built around tools you reach for every day. Start with a few essentials and upgrade as your cooking style grows.', extra: '“A few reliable tools beat a drawer full of gadgets.”', span: { col: 2, row: 1 }, color: '#f4ead8' },
  { label: 'Editor’s Pick', title: 'Chef’s Knife', body: 'A quality chef’s knife handles nearly every prep task, from herbs to squash. It’s the tool most cooks reach for first.', extra: '“A great knife makes every recipe easier.”', link: 'https://www.amazon.com/Amazon-Basics-Classic-Chefs-Rivets/dp/B09WW6VGHX/ref=sr_1_9?crid=20VLXAB1SYXAR&dib=eyJ2IjoiMSJ9.ogtZ39PSrD-ERAopQ2MM3fPzZ9nwXbNawAPARi0Aa75qduDGT3OPlX4CNIEBRpfXckSLE0cFxFca68FuopS9Fut9KiPJKNmlLLL19vVG1joOgDxWeJ3YQYUTevMd_8720wkgzt9rfzFQxqsvmwvTtQhhgU1REi2ctLNT7w1EF7UF09VVmQCPnBBCDKG32FFLnbgzJXEuZpXZg1dyvkuPMKqVkGuQ8b79Q0vBbZSZ5hLBdSTJjWAPE0Ozbp0yZ6aJOqAQyE8OECATOlNzMRM-Zm2j2E67FL9zP9KFoDQfh5k.lx1J8HA_125Y-GIUzfF8LMaBkjm-BE24ASgIL0O-eZY&dib_tag=se&keywords=chef%27s+knife&qid=1779007348&sprefix=chef%27s+kni%2Caps%2C378&sr=8-9', span: { col: 2, row: 2 }, color: '#f8efe7' },
  { label: 'Budget Favorite', title: 'Nonstick Skillet', body: 'Ideal for eggs, pancakes, and fast weeknight meals. A reliable starter pan.', extra: 'Great for low-fuss cooking.', link: 'https://www.amazon.com/SENSARTE-Nonstick-Frying-Pan-Skillet/dp/B086PHS2V8/ref=sr_1_2_sspa?crid=58ZF31MWD5R5&dib=eyJ2IjoiMSJ9.NxxwMGm5b38y9QGlT8eoCZTppLpzTNb2QfNA40imgNzfnhKU_dezY37tkPjCclTouaQjc3GVF9WRnc7LWIo08ccVnkxGihvZLEtp6m5zJQo9oYgFXvCi12BgIWtS_RUpb79P-ENkieU-NbidcjLFs70rRqLGnqPzWNy2mg44uM0mEwLITaQBb_-j5EiYX4YUPMw4QrNBG3X1WTdow6Vv1ZG2uLG12hIDCx6yFUnuH1Mw9TSrJtJamVDLMRbGiiEL-A9AIqeHp3rz-lyh8m05wG_9NDbdgz94hmouME8hGLg.J3nkXxaPA6Pz7Ou9mj3dlqOpmnpvrhqkR3BDSfNahhU&dib_tag=se&keywords=nonstick+skillet&qid=1779008034&sprefix=nonstick+skill%2Caps%2C326&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', span: { col: 1, row: 1 }, color: '#e8f1ea' },
  { label: 'Most Versatile', title: 'Sheet Pan', body: 'Roast vegetables, bake cookies, or make one-pan dinners.', extra: 'Weeknight MVP.', span: { col: 1, row: 1 }, color: '#ece8f6' },
  { label: 'Kitchen Staple', title: 'Mixing Bowls', body: 'From prep to baking, nested bowls earn cabinet space fast.', extra: 'Look for stackable sets.', link: 'https://www.amazon.com/goodcook-Nonstick-Bakeware-Cookie-multicolor/dp/B0026RHI3M/ref=sr_1_5?crid=ABVOR7S1U2QZ&dib=eyJ2IjoiMSJ9.VNjirVNkoBfKpCCcZPlEkPyHFQozVI3SpicOIqjZ3G4Ebjr8SZKJtsV4160Kt3blrGUuN_d6lcDBkD-mhOQXonVnVasKo_1RgmtQ9iENGV9pnioyv4HjFbe9IqY2imEkblqxFC61EJeM8Tbi2JU3YsanmaIK9guc-wlWvM3t7O1Lo_szn8zBMuGZGjeam3_OZ-WQUehFjsj1oBhqJc7LYcOckt6NRUnqUoH7QQIaOY9LDR-SDwwQCPb9aiFEPnmSf1VNw0_RLoB1f41UvfzOTn6XxsZ7rKKiZxGddWUfpZ0.i6fGQMsKeFfWSLrF86UvST7ZG1iTSJYDwpkBgHBojcQ&dib_tag=se&keywords=sheet+pan&qid=1779008075&sprefix=sheet+p%2Caps%2C405&sr=8-5', span: { col: 2, row: 1 }, color: '#ffffff' },
  { label: 'Small Kitchen Pick', title: 'Cutting Board', body: 'A roomy board makes prep safer and less messy.', extra: 'Bigger than most beginners expect.', link: 'https://www.amazon.com/Gorilla-Grip-Cutting-Board-Set/dp/B01GP2MTXW/ref=sr_1_5?crid=2R5V3I7R43ZAR&dib=eyJ2IjoiMSJ9.lWe-Y5Dd7BNlYj3sKvcuU9YUIAF5WcZXk_gTy6Q4OqEjHf2Hph4EFFoewyD76U2bD43WpnNCetW-osfeUFTdKao3oTQglr3uW8oS-UWlu1ns0VJ2erXKQv8BCSI3RH5H3OoG4AdcpOBCXEAfGA0bTb0W1IPB0wB-guXBc79sOnzzrxdHjVrms_pWUCQfjsJ1QmbA_O43bAjfLEjV86ClBMo3e-MeuJXyHDkUVRiZ-ad_9HaJ41s6i37EXrp1a9GclDCV6dUnSHgJg52BwCZySshdl9Ud4TozEmNnahFoJrA.9VnnfSGiDr00AWpAZT0T7dpoQqRqA44lll73UGdokqc&dib_tag=se&keywords=cutting+board&qid=1779008114&sprefix=cutting+boa%2Caps%2C352&sr=8-5', span: { col: 1, row: 1 }, color: '#f8efe7' },
  { label: 'Baking Essential', title: 'Measuring Cups', body: 'Useful for baking precision and portioning pantry ingredients.', extra: 'Glass or stainless both work well.', link: 'https://www.amazon.com/TILUCK-Measuring-Stainless-Utensils-Colorful/dp/B0F4CZ6SY7/ref=sr_1_12_sspa?crid=1YJ582G9QWOWP&dib=eyJ2IjoiMSJ9.y8VN2sOlodoOhMVibB-hpj8XH6Qx2jD038Hg7oVjVDaDT_HMB0r1Sf53cpsb7o4N6e6I3ynzDqiSalDkPPfMiejzDnk-wmpLPKMGeNEUsVGPeTswHR65jvSeDQJv1VAEHgyELzSxc-MeTPAoLDuMR8PzLxwcWVZYBXQ00THx3gcCOSOYubQ2DTv1j83tAqdBObHqgNfOBNU2oUNdU30LRWAZAcYQ9ifGRQtecfYfZdC7zoFLH-CZiv5Phg2HIdrWVEpgIK6TSIuJBjasymZSlMVW_LCPEKv1_E7kHaUuvVE.XQTp5lzPhS_IfA0PS-SQx9lb0AQoSmzRDXDA03LmXbE&dib_tag=se&keywords=measuring+cups&qid=1779008147&sprefix=measuring+%2Caps%2C314&sr=8-12-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1', span: { col: 1, row: 1 }, color: '#e8f1ea' },
  { label: 'Underrated', title: 'Kitchen Shears', body: 'Trim herbs, open packaging, cut chicken, and more.', extra: 'Often replaces a knife for quick jobs.', link: 'amazon.com/KitchenAid-Protective-Dishwasher-Stainless-8-72-Inch/dp/B07PZF3QS3/ref=sr_1_2_sspa?crid=1BR48QK5DYTNV&dib=eyJ2IjoiMSJ9.P3Vtd0O_fIIgx9zx2j-6QoKIGhB0XqBLRUaMV6Lr4ftJPfTjJVtSQ2vTlY06x11Mu0q3v5PqLyxuQYZxQCEnuSkNFJhwLjQkYDw2Htk_-OML45TG09zk8P5f4hdq3THiaH8wj6gU-wcYy-Wvnk_2Imbnm5-sGAx6T_nUm-S-LlkD5SBRxACulOV28aafONXSrO1kF4tGieSBDbahbRD_aT_0TF7rY6msj-PD5v52t5OErQ2tsrjnr57PsZLm4TGTsFbYNS6I3ujxEvhSaoZYCqLAVRzmuzMuUi-iB_TjDO4.z-tj-ydKJvaJr82jhU9WSGmZlZSxan5gPVXRF253LlM&dib_tag=se&keywords=kitchen+shears&qid=1779008212&sprefix=kitchen+shea%2Caps%2C398&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', span: { col: 1, row: 1 }, color: '#ece8f6' },
    { label: 'Daily Use', title: 'Colander', body: 'Pasta, berries, vegetables—one of the quiet workhorses.', extra: 'Choose one with sturdy handles.', link: 'https://www.amazon.com/ExcelSteel-5-Quart-Stainless-Steel-Colander/dp/B00555ETXY/ref=sr_1_5?crid=OEOWWPK17NR6&dib=eyJ2IjoiMSJ9.rhyvkJ3ldthLmDmA7ZBDNzmYWrJM6FoP-16HBvhUe0r63BW2Ox0NXNyP0k0mqf5z8TThiDoFwVUEyvLm2Tn1ypdSkknPeMZ1DLHE9_2nzyJqswbNpmJOd1ZSXdK0zlLtAMOjGLgG8GNXmVV9R-vgfwcfFRG4Tm_8qriXR1F0qc73IKy0DOdPnDAwl_di9fEZsVSCZhOIOUiezSOiihA8eSo2HWsBRHXAiHlhKaySWE1LBq0sSLm5cPvJeTkFf_VH37_ArJUSa7_ltcUMsd5cHG5KTVo_ZhJHEnlnlCMDepg.jOzi8eOjm2umw5kosb-k_pSkCYXCUb6l6F1wJeC-eu4&dib_tag=se&keywords=colander&qid=1779008247&sprefix=coland%2Caps%2C306&sr=8-5', span: { col: 1, row: 1 }, color: '#f8efe7' },
  { label: 'Simple Essential', title: 'Silicone Spatula', body: 'Scrapes bowls clean and stirs without scratching pans.', extra: 'Heat-safe versions are best.', link: 'https://www.amazon.com/Silicone-Spatulas-Resistant-Utensils-Cookware/dp/B08M3J1G8X/ref=sr_1_1_sspa?crid=14PW3DRY2U3WB&dib=eyJ2IjoiMSJ9.La1iSEcG-MEW7zhzIuKYsjuM-k3qnc-YYHrkFhK98Xj_gGv53KWsR4YhGJhmq7yweAItNA55cvN5Oola09ytDs5jKlSzqeNtqpT551_a9EutobaKDZAPlY_Za9ZAH3lrDD6K3VknA462hOH7oYzR3iD5Ab2YfRQEfPRjJgTArvEnOBuepfHBJbQmH6qFdxttZh8JLG2TzmjDNu38M-oLaiPZYbxEqxFQuuJRQZEKGgEM8seMuzyfIqGKu0D4A-PguBMT-HgbWGWXsapze50hBLkG_AY3CS4kZfTG22O4QlE.TOk-nmcyz_clpGJEM9vORVesX5hWJWYyINQKGeQwy78&dib_tag=se&keywords=silicone+spatula&qid=1779008287&sprefix=silicone+spatu%2Caps%2C288&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', span: { col: 1, row: 1 }, color: '#e8f1ea' },
  { label: 'Prep Favorite', title: 'Vegetable Peeler', body: 'A sharp peeler makes potatoes, carrots, and apples much faster.', extra: 'Small tool, big time-saver.', link: 'https://www.amazon.com/Premium-Vegetable-Peeler-Set-Stainless/dp/B0DGTH5TJM/ref=sr_1_3_sspa?crid=3O6B0FYFRNS7D&dib=eyJ2IjoiMSJ9.W31QpKPlSX4W80sifhlB6SfNNKqwxEhuYK4krgli6jJQMaLoLkJnvVvwdydKM4rPzRfO1mQUQteKVGDFfIqTLAF9wNG6ROVaHp5AQaXwcbZ1mm3MltFZKhtHagxlIhKkEx2c5_raNqZXZef9EZY11T4LSc2tsQ3rjpjLGh6qclo6Rnmcdie4qXtXE2uhC2qYQuE93f3ibkVg4H71mobPk6H3P3nGZzgALn2PZEt_6-4kJqcltQPLVZkDhSLvWWvZOkjEQjeKaQuiDuC3nmz3VpDgSQZekjvu9_IJrnYYQig.6oxAR-AEEtYq3ykFEF4042PgoA18UVGu1ftYj9FVPDQ&dib_tag=se&keywords=peeler&qid=1779008336&sprefix=pee%2Caps%2C421&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', span: { col: 1, row: 1 }, color: '#ece8f6' },
  { label: 'Storage Pick', title: 'Food Containers', body: 'Good containers reduce waste and keep leftovers organized.', extra: 'Clear sets make fridge life easier.', link: 'https://www.amazon.com/Rubbermaid-2108390-Brilliance-24-Piece-Container/dp/B07X5Y11CB/ref=sr_1_9?crid=URM8B7X21Q3Z&dib=eyJ2IjoiMSJ9.FQY2iGYzbrczlG9jbyZkjrH5StjC0z06NvLaTB5y0YYDoNIOgoWjBDfJJLulDKqHQg1An6_7-HNPGLs9kWJa718G3Gjr90-5jAbCWFZk4icoa4bnuyyNbO83vJV6FFYWppVBM_4n_H3uwPM_zamm_VUxlynHnJgNwQ_JJritMc0QZ548JflRen_3wi2ubAxa05aYHIC7zuu_sUzqRs1l8DIHbE1SyTg6it3cETtEEsbwIufDRqN88YSI9kIWh9OG7mvaiG9YvVaPZwvUtLl3WfR_dWjTUKAIHn5vjAO9AmU.3aDiNlxb5RqVg27R1KU9uTZPteLCiQ3CeGeBl5zoM3k&dib_tag=se&keywords=rubbermaid%2Bfood%2Bcontainers%2Bset&qid=1779008421&sprefix=rubbermaid%2Bfood%2Bcontainers%2Bs%2Caps%2C321&sr=8-9&th=1', span: { col: 1, row: 1 }, color: '#f8efe7' },
  { label: 'Everyday Tool', title: 'Tongs', body: 'Useful for flipping, tossing, serving, and grabbing hot foods safely.', extra: 'Feels like an extra hand.', link: 'https://www.amazon.com/Kitchen-Silicone-Non-Stick-Stainless-Grilling/dp/B074WB5D79/ref=sr_1_1_sspa?crid=2AZZQDLOQ2CHL&dib=eyJ2IjoiMSJ9.JHFhADA5NCmG1oUolHSDsp2FtCRD_t644rXt2j-nzqcJo9RLL70ZtSdHmdqhbQ5In-p2-6kqMcIKe2KdTSVrCbSlINiR90rs4mzJOExEI2phDzASmZbuYX7f4iVaEPigxLYmT_GlwkzAAvv0dfdHGp55Dy_hUwofoBi93NxOrJt57CYCJ0MSqL80QATepXN9iTOQf7RD_mwGrzAAXE-kDXWs3GcTxBXtxlaSQGH-7EypJ05Orb8f5x8fV2XelC1BIQTH2uK6RagC9cAau_-lYOs-s24lfQ4u1O9VGXfRqZM.IriQ7GBj0AvCqxm15xbmI8NqBwYVeKYi16bBc8Fmqv0&dib_tag=se&keywords=tongs&qid=1779008473&sprefix=to%2Caps%2C317&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1', span: { col: 1, row: 1 }, color: '#e8f1ea' },
  { label: 'Countertop Essential', title: 'Saucepan', body: 'A medium saucepan covers soups, grains, sauces, and reheating.', extra: 'One pot you will use constantly.', link: 'https://www.amazon.com/SENSARTE-Nonstick-Stay-cool-Multipurpose-Induction/dp/B09KH38HF2/ref=sr_1_5?crid=QNSMV756DBVF&dib=eyJ2IjoiMSJ9.QAinwdsK-CYNbBOjPxE3HBBHauudWqVqUtp1h1pxKmJl-j8i68NMb3WSsdqxrfykWfc9MDTgkRuUbzm5SosvxbQktXIBwkmuqOoGUT7cEthhYoBkgU3-ZSgWjBIwa-V4yDYkUEF4e7LwuuCnFwOPIe6Ci1GJV-62teGRyDsmqauW4OhoqfofeqgwwUvB7e91NIDtgwMzvK2j7GzI5QrwDi4cnbGQpl6GCAlOZeKqasV8jWZTFu6hUvl1IEK6hXfK_3vvsOtJPvGeN-N4qXM4DCZu1nbnGIvV328JFLLWxP4.Z3WiYR-3G537Wx7dU5LLrqMxhCvNwPtseR6idyNISoI&dib_tag=se&keywords=saucepan&qid=1779008511&sprefix=saucep%2Caps%2C343&sr=8-5', span: { col: 2, row: 1 }, color: '#ece8f6' },
];

    const fetchHandheldGadgets = async () => {
        const response = await fetch(`http://localhost:3001/gadgets`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ 'category': 'Handheld Prep Gadgets' })
        })
        const data = await response.json()
        setHandheldGadgets([...data])
    }

    const fetchEverydayTools = async () => {
        const response = await fetch(`http://localhost:3001/gadgets`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ 'category': 'Smart Everyday Kitchen Tools' })
        })
        const data = await response.json()
        setEverydayTools([...data])
    }

    const fetchCountertopAppliances = async () => {
        const response = await fetch(`http://localhost:3001/gadgets`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ 'category': 'Small Countertop Appliances' })
        })
        const data = await response.json()
        setCountertopAppliances([...data])
    }

    const fetchTrendingGadgets = async () => {
        const response = await fetch(`http://localhost:3001/gadgets`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ 'category': 'Specialty & Trending Gadgets' })
        })
        const data = await response.json()
        setTrendingGadgets([...data])
    }



    useEffect(() => {
        fetchHandheldGadgets()
        fetchEverydayTools()
        fetchCountertopAppliances()
        fetchTrendingGadgets()
    }, []
    )

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <div id='cool-gadgets'>
 <h1>Cool Gadgets</h1>
            <h2>There are a lot of cool cooking gadgets out there, but not every one is worth buying. Below are our hand-picked choices of tools and gadgets we think are genuinely worth the cost-and the space they take up.</h2>
            <h5>Handheld Prep Gadgets</h5>
            <div className='gadget-cards'>
                {handheldGadgets.map(gadget => <Gadget gadget={gadget} key={uuidv7()} />)}

            </div>
            <h5>Smart Everyday Kitchen Tools</h5>
            <div className='gadget-cards'>
                {everydayTools.map(gadget => <Gadget gadget={gadget} key={uuidv7()} />)}
            </div>
            <h5>Small Countertop Appliances</h5>
            <div className='gadget-cards'>
                {countertopAppliances.map(gadget => <Gadget gadget={gadget} key={uuidv7()} />)}
            </div>
            <h5>Specialty & Trending Gadgets</h5>
            <div className='gadget-cards'>
                {trendingGadgets.map(gadget => <Gadget gadget={gadget} key={uuidv7()} />)}
            </div>
            </div>
           

            <Divider />

<div id='alternatives'>
<h1>Alternatives</h1>
            <h2>You don’t need every kitchen gadget to cook well. In many cases, common household items can stand in for basic tools and still get the job done. If you’re missing a piece of equipment, these simple substitutions can help you keep cooking without making a special purchase.</h2>

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * 5, page * 5 + 5)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.tool}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    )
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={rows.length}
                    rowsPerPage={5}
                    rowsPerPageOptions={[]}
                    page={page}
                    onPageChange={handleChangePage}
                />
            </Paper>
</div>
            

            <Divider />

<div id='product-recommendations'>
  <h1>Product Recommendations</h1>
  <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" fontWeight={700} mb={1}>Recommended Basic Kitchenware</Typography>
      <Typography variant="body1" color="text.secondary" mb={4} maxWidth={760}>
        These are our hand-picked basics: dependable kitchen tools that earn their cost through everyday usefulness.
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, minmax(0, 1fr))' },
        gridAutoRows: '210px',
        gridAutoFlow: 'dense',
        gap: 2.5,
      }}>
        {basicProducts.map((basicProduct) => (
          <Paper
            key={basicProduct.title}
            elevation={0}
            sx={{
              p: 2.5,
              borderRadius: 4,
              backgroundColor: basicProduct.color,
              display: 'flex',
              minWidth: 0,
              overflow: 'hidden',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gridColumn: { md: `span ${basicProduct.span.col}` },
              gridRow: { md: `span ${basicProduct.span.row}` },
              border: '1px solid rgba(0,0,0,0.05)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: 3 }
            }}
          >
            <Box>
              <Typography variant="caption" sx={{ letterSpacing: 1.2, textTransform: 'uppercase', opacity: 0.7 }}>
                {basicProduct.label}
              </Typography>
              <Typography variant={basicProduct.span.row > 1 ? 'h4' : basicProduct.label === 'Editor’s Note' ? 'h5' : 'h6'} fontWeight={700} mt={1} mb={1.2} sx={{ lineHeight: 1.15 }}>{basicProduct.title}</Typography>
              <Typography variant={basicProduct.span.row > 1 ? 'body1' : 'body2'} color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {basicProduct.body}
              </Typography>
            </Box>
            <Box>
              {basicProduct.extra && (
                <Typography
                  variant={basicProduct.label === 'Editor’s Note' ? 'body1' : 'body2'}
                  sx={{ fontStyle: basicProduct.label === 'Editor’s Note' ? 'normal' : 'italic', mb: 2, fontWeight: basicProduct.label === 'Budget Favorite' ? 600 : 400 }}
                >
                  {basicProduct.extra}
                </Typography>
              )}
              {basicProduct.label !== 'Editor’s Note' && (
                <Button variant="text" sx={{ p: 0, textTransform: 'none', fontWeight: 600 }} href={basicProduct.link} target="_blank">
                  View recommended pick →
                </Button>
              )}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
</div>      
        </div>
    )
}

export default ViewTools
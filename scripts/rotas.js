
const listaSimilar = document.querySelector('.box-lista');
const listaEticos = document.querySelector('.box-lista2');
const btSimilar = document.querySelector('#btListaS');
const btEtico = document.querySelector('#btlistaE');
const ContainerVeri = document.querySelector('.container-verificacao');
const TelaOpcoes = document.querySelector('.opcoes');
const TelaMods = document.querySelector('.mods');
const TelaIa = document.querySelector('.assistente');
const cabecalho = document.querySelector('.cabecalho')

const btVeri = document.querySelector('#btVerif');
const inputAtivi = document.querySelector('#inputVerifi');
const inputNL = document.querySelector('#inputNomeLoja')
const BtNloja = document.querySelector('#btSalvarNomeL');
const BtIA = document.querySelector('#btIA');
const TelaCadastro = document.querySelector('.cadastroDECOD')

btVeri.addEventListener('click', ()=> VerificarCodDeAtivacao());
BtNloja.addEventListener('click', ()=> InserirNomeDaLoja())
BtIA.addEventListener('click', ()=> abrirTelaIa());



const btcads = document.querySelector("#btCadastro");

btcads.addEventListener("click", ()=> TelaCadatro());

btSimilar.addEventListener('click', ()=> abrirTelaSimi());
btEtico.addEventListener('click', ()=> abrirTelaEtico());

function abrirTelaSimi(){

    listaSimilar.style.display = 'flex';
    listaEticos.style.display = 'none';
    TelaCadastro.style.display = 'none'
    TelaIa.style.display = 'none';

}


function abrirTelaEtico(){

    listaSimilar.style.display = 'none';
    listaEticos.style.display = 'flex';
    TelaCadastro.style.display = 'none'
    TelaIa.style.display = 'none';
}

function abrirTelaIa(){

    TelaIa.style.display = 'flex';
    listaEticos.style.display = 'none';
    listaSimilar.style.display = 'none';
    TelaCadastro.style.display = 'none';
}


function Indsiponivel(){

    swal("Indisponivel no momento", 'Disponivel Apenas para o Admiministrador');

}


let cod = 253558;

function VerificarCodDeAtivacao(){



const txtVer = inputAtivi.value;

if(txtVer == cod){

    setTimeout(()=>{
    
    localStorage.setItem('SavaCod', JSON.stringify(cod));
    TelaOpcoes.style.display = 'none';
    TelaMods.style.display ='flex';
    
    },2000)

}else{

    swal("Codigo Invalido", 'Digite Novamente')
    txtVer.value = " ";
}


}

const NomeLoja = document.querySelector('.NomeLoja');
const NomeLoja2 = document.querySelector('.NomeLoja2');


function InserirNomeDaLoja(){

    const TxtNameLoj = inputNL.value;

    NomeLoja.innerHTML = `${TxtNameLoj}`;
    NomeLoja.innerHTML = `${TxtNameLoj}`;
    localStorage.setItem('NomeLoja', JSON.stringify(TxtNameLoj));
    CarregandoDADOSLOCAL();
    VerificandoDadosDeAtivaçao();

}


function CarregandoDADOSLOCAL(){

    const saveNomeLoja = JSON.parse(localStorage.getItem('NomeLoja'));

    if(saveNomeLoja){

        NomeLoja.innerHTML = `${saveNomeLoja}`;
        NomeLoja2.innerHTML = `${saveNomeLoja}`;
    }

}


function VerificandoDadosDeAtivaçao(){

    const saveCod = localStorage.getItem('SavaCod');
    const saveNLoja = JSON.parse(localStorage.getItem('NomeLoja'));

    if(saveCod || saveNLoja){

        ContainerVeri.style.display = 'none';
        listaSimilar.style.display = 'flex';
        cabecalho.style.display = 'flex';
        NomeLoja.innerHTML = `${saveNLoja}`


    }

}

function TelaCadatro(){

    listaEticos.style.display = 'none';
    listaSimilar.style.display = 'none';
    TelaCadastro.style.display = 'flex';
    TelaIa.style.display = 'none';
    swal( `O Sistema ja esta com ${codBarras.length} codigos de barras salvos, incluindo medicamentos eticos e similares`, 'Use esta opçâo para cadastrar medicamentos que ainda nâo estâo cadastrados')
    

}

const BtsCod = document.querySelector('#btSalvarCod');
const input50 = document.querySelector('#input050');
const input55 = document.querySelector('#input055');

BtsCod.addEventListener('click', ()=> cadastroNewCodBarra());

function cadastroNewCodBarra(){

    const nomeReme = input50.value;
    const CODb = input55.value;

    if(nomeReme == '' || CODb == ''){

        swal("Preencha o input")
        return
    }else

    codBarras.push({nome: nomeReme, cod:CODb});

    setTimeout(()=>{

        swal(`${nomeReme}` +" Foi cadastrado com sucesso");

    },1000)

}

VerificandoDadosDeAtivaçao();


// codigos de baras


const codBarras = [

    { nome: 'AMOXICLINA TRI HIDRATADA(eurofarma)250mg/5ml', cod: 7891317001568 },
    { nome: 'AMOXICLINA 250mg/5ml:(polimoxil)', cod: 7896004708157 },
    { nome: 'AZITROMINICINA DI-HIDRATADA 900MG 200MG/5ML(eurofarma)', cod: 7891317101985 },
    { nome: 'CEFALEXINA 250MG/5ML (TEUTO)', cod: 7896112128861 },
    { nome: 'CEFALEXINA 500MG(TEUTO)', cod: 7896112134213 },
    { nome: 'CEFALEXINA 500MG (uniâo quimica)', cod: 7896006216544 },
    { nome: 'AZITROMICINA 500MG (laboratorio GLOBO)', cod: 7898060132518 },
    { nome: 'IBUPROFENO 600MG (vitamedic)', cod: 7898049796519 },
    { nome: 'AMPICILINA 500mg (prati)', cod: 7898148291120 },
    { nome: 'IBUPROFENO GOTAS 50MG/ML ', cod: 7898133134234 },
    { nome: 'IBUPROFENO 600MG(teuto)', cod: 7896112158363 },
    { nome: 'IBUPROFENO GOTAS 50MG/ML(natulab)', cod: 7898133134234 },
    { nome: 'DIPIRONA MONOIDRATADA 1G(MIRADOR)', cod: 7896714274577 },
    { nome: 'DIPIRONA GOTAS 20ML(dipimed)', cod: 7896862940058 },
    { nome: 'DIPIRONA GOTAS 10ML(dipimed)', cod: 7896862940027 },
    { nome: 'POLAPIC MALEATO DE DEXCLORFENIRAMINA 0,4MG/ML(ems)', cod: 7896004772264 },
    { nome: 'DEXAMETASONA COMPRIMIDO 4MG (teuto)', cod: 7896112194576 },
    { nome: 'HISTAMIN COMPRIMIDO 2MG (neo quimica)', cod: 7896714219301 },
    { nome: 'DICLORIDRATO DE HIDROXIZINA 25MG (legrand)', cod: 7894916146111 },
    { nome: 'DESLORATADINA 0,5MG/ML(ems)', cod: 7896004769622 },
    { nome: 'LORATADINA 1MG/ML (geolab)', cod: 7899095201903 },
    { nome: 'LORATADINA 1MG/ML (prati)', cod: 7898148294473 },
    { nome: 'PREDNISOLONA 3MG/ML(vitamedic)', cod: 7898049796830 },
    { nome: 'DESLORATADINA 5MG (legrand)', cod: 7896004725772 },
    { nome: 'DICLORIDRATO DE HIDROXIZINA 2,0mg/ML(germed)', cod: 7896004727363 },
    { nome: 'DICLORIDRATO DE HIDROXIZINA 2mg/ML(laboratorio globo)', cod: 7899620911307 },
    { nome: 'BETRICORT POMADA (geolab)', cod: 7899095203273 },
    { nome: 'BETOGENTA CREME (geolab) ', cod: 7899095204454 },
    { nome: 'MICONAZOL CREME (cimed)', cod: 7896523208893 },
    { nome: 'MICONAZOL CREME (prati) ', cod: 7898148295340 },
    { nome: 'PROPIONATO DE CLOBETASOL POMADA (germed)', cod: 7896004712406 },
    { nome: 'PROPIONATO DE CLOBETASOL CREME (teuto)', cod: 7896112113584 },
    { nome: 'PROPIONATO DE CLOBETASOL CREME (neo quimica)', cod: 7896714209852 },
    { nome: 'CONACORT POMADA (geolab)', cod: 7899095202740 },
    { nome: 'CIMECORT 15g CREME (cimed)', cod: 7896523207780 },
    { nome: 'CETOCONAZOL CREME (brasterapica)', cod: 7898100241279 },
    { nome: 'CANELA DO VEIO POMADA (apinil)', cod: 7898936049889 },
    { nome: 'MASSAGEOL POMADA (neoquimica)', cod: 7896714230504 },
    { nome: 'NIMESULIDA GEL (ems)', cod: 7896004720616 },
    { nome: 'BALSAMO SUPREMO GEL (hebarmed)', cod: 7898303260626 },
    { nome: 'DICLOFENACO GEL (teuto)', cod: 7896112142126 },
    { nome: 'DICLOFENACO gel (neoquimica)', cod: 7896714204413 },
    { nome: 'MASSAGEOL SPRAY (neoquimica)', cod: 7896714273006 },
    { nome: 'ALIVIOL ICE SPRAY (cifarma)', cod: 7898495608350 },
    { nome: 'LEVOFLOXACINO 500MG (laboratorio GLOBO)', cod: 7899620912670 },
    { nome: 'PIROXICAM 20MG (ems)', cod: 7896004705088 },
    { nome: 'MELOXICAM 15MG (nequimica)', cod: 7896714228853 },
    { nome: 'NAPROXENO 500MG (teuto)', cod: 7896112121831 },
    { nome: 'NAPROXENO SODICO 500MG(legrand)', cod: 7896004773957 },
    { nome: 'CETOPROFENO 150MG (germed)', cod: 7896004752594 },
    { nome: 'CETOPROFENO 50MG (ems)', cod: 7896004705736 },
    { nome: 'LEVOFLOXACINO 500MG (prati)', cod: 7899547528442 },
    { nome: 'NIMESULIDA GOTAS 50MG/ML (teuto)', cod: 7896112126768 },
    { nome: 'NIMESULIDA GOTAS 50MG/ML (ems)', cod: 7896004704043 },
    { nome: 'DICLOFENACO GOTAS (cimed)', cod: 7896523211855 },
    { nome: 'PARACETAMOL 500MG (prati)', cod: 7898148295012 },
    { nome: 'DICLOFENACO SODICO 50MG (altefar)', cod: 7897917004008 },
    { nome: 'DIPRONATO DE BETAMETASONA 5MG/ML SUPENSÂO INJETAVEL(uniâoquimica)', cod: 7896006248927 },
    { nome: 'CECOFLAN 100MG (vitamedic)', cod: 7898049795611 },
    { nome: 'INFRALAX COMPRIMIDO (ems)', cod: 7896004727158 },
    { nome: 'TANDENE COMPRIMIDO (delta)', cod: 7893454100678 },
    { nome: 'CIPROFIBRATO 100MG (neoquimica)', cod: 7896714215976 },
    { nome: 'DICLOFENACO POTASSICO 50MG ', cod: 7896004800400 },
    { nome: 'NEOPIRIDIN PASTILHA MENTA (neoquimica)', cod: 7896714283005 },
    { nome: 'APIS FRESH SPRAY MENTA (arte nativa)', cod: 7898277710387 },
    { nome: 'APIS FRESH SPRAY MEL (arte nativa)', cod: 7898277710394 },
    { nome: 'CIFLOGEX SPRAY MEL (cimed)', cod: 7896523206271 },
    { nome: 'NEOLEFRIM COMPRIMIDO (neoquimica)', cod: 7896714265933 },
    { nome: 'CIMEGRIPE COMPRIMIDOS (CIMED)', cod: 7896523200576 },
    { nome: 'NEOLEFRIM COMPRIMIDO DIA (neoquimica)', cod: 7896714273822 },
    { nome: 'EXTRATOS DE PROPOLIS (smells)', cod: 7897835702277 },
    { nome: 'CARBOCISTEINA 50MG/ML (prati)', cod: 7898148293353 },
    { nome: 'ACETILCSITEINA 20MG/ML (ems)', cod: 7896004715292 },
    { nome: 'GUACO XAROPE 117,6MG/ML (natulab) ', cod: 7898133131837 },
    { nome: 'GUACO XAROPE 35MG/ML (natulab)', cod: 7899470802961 },
    { nome: 'ACESTILCISTEINA 600mg/Env Granulado (geolab)', cod: 7899095239227 },
    { nome: 'NEUTOSS XAROPE 0,48mg/ml (belfar)', cod: 7897917000550 },
    { nome: 'EXPEC XAROPE ANTIALERGICO (legrand)', cod: 7896004812168 },
    { nome: 'VIOLETA GENCIANA (uniphar)', cod: 7898031311034 },
    { nome: 'JALAPAD1 (MEDICAMENTO HOMEOPRATICO)', cod: 7898048693260 },
    { nome: 'BICARBONATO DE SODIO 50g CAIXA PEQUENA (uniphar) ', cod: 7898031311232 },
    { nome: 'TINTURA DE LODO (uniphar) ', cod: 7898031310969 },
    { nome: 'BICARBONATO DE SODIO 99% 100G POTE (uniphar) ', cod: 7898031312789 },
    { nome: 'CLOTRIMAZOL CREME (germed)', cod: 7896004721231 },
    { nome: 'PROMERGAN CREME DERMATOLOGICO (belfar) ', cod: 7897917001342 },
    { nome: 'ACETATO DE DEXAMETASONA 1mg/g (teuto)', cod: 7896112101352 },
    { nome: 'SULFATO DE NEOMICINA + BACITRACINA ZINICA POMADA(neoquimica) ', cod: 7896714217116 },
    { nome: 'SULFATO DE NEOMICINA BACITRACINA ZINICA POMADA (prati)', cod: 898148291533 },
    { nome: 'ALEGOMINE CREME (cimed)', cod: 7896523209715 },
    { nome: 'BICARBONATO DE SODIO 99% 100G CAIXA GRANDE (uniphar)', cod: 7898031310303 },
    { nome: 'ACICLOVIR 50MG CREME (neoquimica)', cod: 7896714265308 },
    { nome: 'ACETATO DE HIDROCORTISONA CREME (teuto) ', cod: 7896112132936 },
    { nome: 'ÓLEO DE GIRASSOL 200ML (dermaStar)', cod: 7898563804455 },
    { nome: 'HISTAMIN XAROPE', cod: 7896714219318 },
    { nome: 'ANNITA XAROPE  20MG/ML', cod: 7898040321420 },
    { nome: 'ANNITA COMP 500MG', cod: 7898040321512 },
    { nome: 'ALLEGRA XAROPE PEDRIATICO 60ML', cod: 7891058004347 },
    { nome: 'ALLEGRA COMP 60MG', cod: 7891058024314 },
    { nome: 'ALGIE CETOPROFENO 150MG', cod: 7891317013844 },
    { nome: 'LISINATO DE CETOPROFENO 160MG', cod: 7896658008115 },
    { nome: 'ALENIA FUMARATO DE FORMOTEROL DI-HIDRATADO (REFIL)', cod: 7896181918943 },
    { nome: 'ANCORON 100MG', cod: 7896094207844 },
    { nome: 'ABRILAR XAROPE ', cod: 7898040320973 },
    { nome: 'AEROLIN SPRAY 100mcg/DOSE', cod: 7896269900150 },
    { nome: 'ATROVENT 0,250MG/20ML', cod: 789602630316 },
    { nome: 'ATROVERAM COMP 1G', cod: 7896094915374 },
    { nome: 'BUSCOVERAN COMPOSTO GOTAS 10ML', cod: 7893353041393 },
    { nome: 'BUSCOPAN GOTAS 20ML', cod: 7896094921405 },
    { nome: 'BUSCOPAN COMP ', cod: 7896094921429 },
    { nome: 'BUSCOPAN COMPOSTO COMP', cod: 7896094921399 },
    { nome: 'BUSCODUO COMP', cod: 7896094921412 },
    { nome: 'BIPROFENID CETOPROFENO 150MG', cod: 7896070601772 },
    { nome: '20 BI COMP ', cod: 7891317158705 },
    { nome: 'BIOVICERIN CAIXA', cod: 7898100268306 },
    { nome: 'BENERVA 300MG', cod: 7893454714325 },
    { nome: 'BAMIFIX 300MG', cod: 7896672201875 },
    { nome: 'BALSAMO BENGUE GEL', cod: 7896004817576 },
    { nome: 'BALSAMO BENGUE POMADA', cod: 7896004817569 },
    { nome: 'BETATRINTA INJEÇÂO', cod: 7891317103323 },
    { nome: 'BENEGRIP MULT PEDRIATICO', cod: 7896094905825 },
    { nome: 'COMBIRON COMP 120MG', cod: 7896658003653 },
    { nome: 'COMBIRON XAROPE 120ML', cod: 7896658007255 },
    { nome: 'COMBIRON GOTAS 30ML', cod: 7896658007286 },
    { nome: 'BUSONID BUDESONIDA SPRAY 32MCG', cod: 7896181915171 },
    { nome: 'BUSONID BUDESONIDA SPRAY 64MCG', cod: 7896181915188 },
    { nome: 'BUSONID BUDESONIDA SPRAY 50MCG', cod: 7896181907176 },
    { nome: 'LOSARTANA POTASSICA 50MG', cod: 7896181920410 },
    { nome: 'CEFALIUM 750MG', cod: 7896658036057 },
    { nome: 'COBAVITAL', cod: 7896255767330 },
    { nome: 'CORISTINA D PRO COMP', cod: 7891142982155 },
    { nome: 'CATAFLAM 50MG', cod: 7896261013490 },
    { nome: 'CEFALIV COMP', cod: 7896658001079 },
    { nome: 'CALMAN COMP', cod: 7895858017156 },
    { nome: 'CALMAM XAROPE ', cod: 7895858017149 },
    { nome: 'CALCITRAN D3', cod: 7898414850891 },
    { nome: 'CALCITRAN B12 XAROPE 150ML', cod: 7898414850242 },
    { nome: 'DRAMIN B6 GOTAS', cod: 7896094922075 },
    { nome: 'DRAMIN B6 COMP ', cod: 7896094999978 },
    { nome: 'DECONGEX PLUS XAROPE PEDRIATICO 120ML', cod: 7896658001918 },
    { nome: 'DECONGEX PLUS GOTAS 20ML', cod: 7896658001925 },
    { nome: 'DEOCIL CETOROLACO TROMETAMOL', cod: 7898096577031 },
    { nome: 'DECADRON 0,5MG COMP', cod: 7896658003516 },
    { nome: 'DORFLEX UNO COMP 1G', cod: 7891058022815 },
    { nome: 'DUOMO 2MG', cod: 7891317455569 },
    { nome: 'ECASIL 81 COMP', cod: 7896112416418 },
    { nome: 'ENTEROGERMINA PLUS', cod: 7891058020286 },
    { nome: 'FLORAX PEDRIATICO ', cod: 7896685303283 },
    { nome: 'FLORAX ADULTO', cod: 7896685303290 },
    { nome: 'FLORASTOR ', cod: 7896006213178 },
    { nome: 'FLANCOX 400MG', cod: 7896637023344 },
    { nome: 'CREME FERNERGAN 20MG/G', cod: 7896070600249 },
    { nome: 'PREVIANE COMP', cod: 7896004818993 },
    { nome: 'REPOPIL COMP', cod: 7896004734026 },
    { nome: 'TESTE DE GAVRIDEZ (DETECT FAST)', cod: 7898953484052 },
    { nome: 'DIAD COMP', cod: 7896523216812 },
    { nome: 'ALGESTONA INJETAVEL', cod: 7908020502517 },
    { nome: 'TÂMISA 20 COMP', cod: 7891317465023 },
    { nome: 'TÂMISA 30 COMP', cod: 7891317009755 },
    { nome: 'SELENE COMP', cod: 7891317465650 },
    { nome: 'NORDETTE COMP', cod: 7891045008433 },
    { nome: 'NEOVLAR COMP', cod: 7891106914024 },
    { nome: 'TRIQUILAR COMP', cod: 7891106914086 },
    { nome: 'METFORMINA 500MG', cod: 7896112126478 },
    { nome: 'METFORMINA 500MG (PRATI)', cod: 7898148291267 },
    { nome: 'AERODINI 100MCG/JATO-DOSE', cod: 7896112147640 },
    { nome: 'GLIBENCLAMIDA 5MG', cod:7896714217093},
    { nome: 'GLICONIL 5MG', cod:7896862910556},
    { nome: 'CLORIDRATO DE PROPRANOLOL 40MG (UNIÂO QUIMICA)', cod:7896006245247},
    { nome: 'CLORIDRATO DE PROPRANOLOL 40MG (TEUTO)', cod:7896112110576},
    { nome: 'CLORIDRATO DE PROPRANOLOL 40MG', cod:7898216362431},
    { nome: 'ALENDRONATO DE SÓDIO 70MG', cod:7894916143424},
    { nome: 'ALENDRONATO DE SÓDIO 70MG', cod:7896004715353},
    { nome: 'SINVASTATINA 20MG', cod:7899620911031},
    { nome: 'SINVASTATINA 40MG', cod:7895296449281},
    { nome: 'SINVASTATINA 40MG', cod:7896004736884},
    { nome: 'LOSARTANA POTASSICA 50MG', cod:7894916145145},
    { nome: 'CAPTOPRIL 25MG', cod:7898148290512},
    { nome: 'CAPTOPRIL 25MG', cod:7899620910133},
    { nome: 'CAPTOPRIL 25MG', cod:7896112116660},
    { nome: 'ATENOLOL 25MG', cod:7896422506342},
    { nome: 'ATENOLOL 25MG', cod:7898148290772},
    { nome: 'ENALAPRIL 10MG', cod:7897917005203},
    { nome: 'ENALAPRIL 10MG', cod:7896004700533},
    { nome: 'HIDROCLORITIAZIDA 25MG', cod:7896862918583},
    { nome: 'HIDROCLORITIAZIDA 25MG', cod:7896112165651},
    { nome: 'DORIL ENXAQUECA COMP', cod:7896094906310},
    { nome: 'DORFLEX COMP', cod:7891058017392},
    { nome: 'VITAMINA C ENFERVESCENTE 1G', cod:7896004774268},
    { nome: 'VITAMINA C 1G ENFERVESCENTE', cod:7896714275277},
    { nome: 'XANTINON COMPLEX XAROPE', cod:7896006216605},
    { nome: 'VONAU FLASH 4MG', cod:7896241296523},
    { nome: 'VOLTAREN 50MG', cod:7896261021051},
    { nome: 'VOLTAREN INJETAVEL', cod:7896261000797},
    { nome: 'TYLENOL GOTAS 15ML', cod:7896212479924},
    { nome: 'TYLENOL SINUS COMP', cod:7896212415618},
    { nome: 'TROK-N 20MG/G +0,64MG/G+2,5MG/G', cod:7891317412555},
    { nome: 'TROK-N', cod:7891317445737},
    { nome: 'TROK-N 30G', cod:7891317445744},
    { nome: 'NORESTIN COMP', cod:7896241274903},
    { nome: 'TROK-N 10G', cod:7891317412524},
    { nome: 'TROK-G 30G', cod:7891317452933},
    {nome: 'TROK-N', cod:7891317445720},
    {nome: 'SCOOT SABOR REGULAR 200ML', cod:7896015590970},
    {nome: 'SCOOT SABOR LARANJA 200ML', cod:7896015590932},
    {nome: 'SCOOT SABOR MORANGO 200ML', cod:7896015590956},
    {nome: 'SCOOT SABOR LARANJA 400ML', cod:7896015590949},
    {nome: 'SCOOT SABOR REGULAR 400ML', cod:7896015590987},
    {nome: 'SORINE ADULTO 30ML', cod:7896658000652},
    {nome: 'SORINE GOTAS BEBÊ', cod:7896658012303},
    {nome: 'SALSEP SPRAY 50ML', cod:7896094201514},
    {nome: 'REPARIL GEL', cod:7898560661563},
    {nome: 'REDOXON GOTAS 20ML', cod:7891106006286},
    {nome: 'REDOXON ENFERVESCENTE 2G', cod:7891106006262},
    {nome: 'REDOXON 1G ENFERVESCENTE', cod:7891106006279},
    {nome: 'PROCTAN POMADA', cod:7898949409465},
    {nome: 'PERMESE INJETAVEL', cod:7891317015343},
    {nome: 'PYRIDIUM 100MG', cod:7892953001370},
    {nome: 'PROFLAM 100MG', cod:7891317411923},
    {nome: 'PURAN T4 50MCG', cod:7897595901316},
    {nome: 'PURAN T4 25MCG', cod:7897595901309},
    {nome: 'NORIPURUM 100MG COMPRIMIDO MASTIGAVEL', cod:7896641805912},
    {nome: 'NORIPURUM XAROPE 10MG/ML', cod:7898581710578},
    {nome: 'NOVALGINA GOTAS 500MG/ML', cod:7891058000172},
    {nome: 'NOVACORT POMADA', cod:7896658000577},
    {nome: 'NOVACORT CREME', cod:7896658000560},
    {nome: 'NOVALGINA COMP 1G', cod:7891058001155},
    {nome: 'MERACICLINA COMP', cod:7896658005589},
    {nome: 'MECLIN 25MG', cod:7896637023115},
    {nome: 'MIOSAN 5MG', cod:7896637023658},
    {nome: 'MIOSAN 30MG', cod:7896637025096},
    {nome: 'MUSCULARE 10MG', cod:7891317432362},
    {nome: 'LABIRIN 24MG', cod:7896637028523},
    {nome: 'LUFTAL GOTAS INFANTIL', cod:7896222720887},
    {nome: 'LUFTAL COMP 40MG', cod:7896016801501},
    {nome: 'KOIDE 120ML', cod:7899640807178},
    {nome: 'KOIDE D 120ML', cod:7891317015060},
    {nome: 'IMOSEC COMP 2MG', cod:7896212478750},
    {nome: 'HIXIZINE XAROPE 120ML', cod:7897129301506},
    {nome: 'HIPOGLOS ADULTO', cod:7891010249908},
    {nome: 'HIPOGLOS TRANSPARENTE', cod:7891010249939},
    {nome: 'HIPOGLOS AMÊNDOAS', cod:7891010249953},
    {nome: 'GLIFAGE XR 500MG', cod:7891721201806},
]


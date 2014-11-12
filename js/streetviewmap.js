//
// Streetview Map
//

function svinitialize(area) {

    console.log('No peaking!');

    //
    // Get Coords
    //
    // Yeah this is a bit gross, right? Why not do it randomly? Because in geoguessr while it was great having random coords, some of the randomized points it picked sucked. I didn't
    // want that at all, thus the manual lat/longs. It's fairly easy to build the random lat long coords based if the selected coords have a street view available
    // however detection for that is a bit CPU intensive. In the mean time, just throw more coords into this array - it ain't that bad!
    //
    var westrussia = ['59.94060363754097,30.314598369441228', '59.93702088907677,30.30358285854163', '59.94393537942982,30.306730270385742', '59.95091332617564,30.316486644587712', '59.9450745440523,30.300106716149457', '59.94230910123215,30.33143491629744', '59.93981780809892,30.329012292613697', '59.937835135204054,30.33188585024618', '59.934879944442166,30.330119132995605', '59.93539679801534,30.325992071484506',
        '55.75356823919013,37.62125029556046', '55.74885855690116,37.61823892593384', '55.745045954819275,37.604856634061434', '55.73036477922606,37.55747852294007', '55.74659939877047,37.5448047631653', '55.75265460508791,37.59452819824219', '55.75277536151922,37.61112184409285', '55.7764199929662,37.657770824589534', '56.31089950737969,38.130919790346525', '56.31177217201627,38.13288702891441', '56.30901485474598,38.12852382659912', '56.73626108927484,38.85324962102459', '56.73199832435751,38.83772499557381', '57.184419339152235,39.416363310447195', '57.185562771697306,39.41464669700508', '57.17454426373845,39.39231634140015', '57.626467454243205,39.893796300311806', '57.62261835986019,39.88757357605209', '57.626448382082174,39.88435492523422', '57.6320126500943,39.88768086441269', '57.62983277959504,39.895981550216675', '57.61932148731715,39.904351866061916', '58.047879814406635,38.85869278899918', '58.050105220275434,38.854308128356934', '57.534441220581556,38.32647793296928',
        '56.858743199300086,35.91738216880913', '56.85952330381951,35.911931920090865', '56.865337444025336,35.90430736541748', '57.001015417987794,40.97381479736214', '57.0004272384711,40.974295771102334', '56.9956393592608,40.980271732623805', '57.00468674271139,40.99103457923775', '57.767987020025714,40.9270617486618', '57.77720401572268,40.89434802532196', '57.7788539292324,40.900951623916626', '56.1281967502794,40.40821545127983', '56.12622344066834,40.40828711982613', '56.12690259951289,40.39732841850309', '59.22373124718632,39.8823881149292', '59.22424728509251,39.88451424818777', '59.857546239580124,38.36679711268516',
        '56.32683921617047,44.00597516279959', '56.3320736124478,44.00949239730835', '56.32994232382251,44.0095638513958', '56.32409672909849,43.981196808526874', '56.329291945451914,43.98822784423828', '56.333142185966025,43.97068962993217', '59.13234934484852,37.90916204452515', '59.12423100489161,37.93051242828369', '43.58725070038928,39.7160267829895', '43.59488919556272,39.72097095236677', '43.56937420643431,39.73955512046814', '67.61512944347186,33.66385474197159', '68.99025245391371,33.06724777095951',
        '54.70449984109716,20.513549888055422', '54.70665023519672,20.513066017156234', '54.70943541193647,20.5083290219045', '57.82376341838343,28.32769732485758', '57.825722367660205,28.32618498854572', '57.82022209386374,28.324764918652363', '56.34290249315091,30.511626577062998', '58.52120338511718,31.275221228861483', '58.520306987148565,31.280514192476403', '59.95429087464877,31.040641880244948', '59.99199554581637,29.77602796512656',
        '54.62398860791072,39.73990316328127', '51.69120676875656,39.24177359906025', '51.66738425352515,39.228531648404896', '51.67549538521684,39.20896267838543',
        '44.71568664465997,37.7856508246623', '44.731960342759656,37.78233175209607', '45.03546143276234,38.95318293623859', '45.050713094403356,38.958639407210285',
        '48.741455511924876,44.53775453410344', '43.31750605148706,45.695935607218416', '43.313776275313266,45.698542284808354', '44.05907973438028,43.07762131502386', '44.0497637922469,43.089303731394466', '44.09949988989791,39.079131316248095', '44.102096787282775,39.091083239618456', '44.56251225577312,38.02875809575198', '44.49011527095107,34.16451265817159', '44.49987981532454,34.16153755009873', '44.468278628555154,34.144313263605', '44.61809280963364,33.51692891068524', '55.79935520693308,49.10632703220472', '55.80083122873918,49.111291050649015', '55.79670346181647,49.10437138096313', '53.42480252414594,49.45034179603681', '53.20308629397219,50.159810112963896', '53.2002771108379,50.176963806152344', '53.187823277740144,50.07917432638351', '56.51014951623275,34.93183643833618', '56.84507488891232,60.59752478526207', '56.843130298878236,60.596135186206084', '56.83834267935901,60.60366339515895', '56.847811931187856,60.589612053881865', '57.24192752905607,37.85571527376305', '57.03874860973951,34.96076652998454', '56.25985622135078,34.33582212877809', '54.79169480145101,32.050112914148485', '54.79121169390737,32.0432464597252', '51.73068624323114,36.19265041372273', '50.59195492808957,36.57659146701917', '50.595244294065594,36.58721923828125', '47.21265819978297,39.7071055410197', '47.21429765452409,39.722329115029424', '46.36354535256381,48.03726997459307', '46.34944485512132,48.03209996171063', '46.344563265292095,48.02294354449259', '51.527130394379135,46.06392459827475', '51.53114302259045,46.05745768494671', '54.742400481142205,55.953232240572106', '55.1689698203296,61.40010094590252', '55.17344756566775,61.399831008020556', '58.01437911613415,56.22793721995549', '58.009323270576885,56.223288201290416'
    ];

    var spb = ['59.93612718408243,30.30302731975098', '59.93895258164001,30.31573841566569', '59.93621264266163,30.319262623524992', '59.93419371431497,30.313412833056645', '59.933630615467855,30.30687339269207', '59.93191868492686,30.30935025162762', '59.93073864400907,30.327420615940354', '59.9353578300321,30.325613021850586', '59.9378183667988,30.33205246872967', '59.93939993653537,30.336689257674152', '59.94134180837374,30.329533552285284', '59.94093338736091,30.319665169663494', '59.94299639952876,30.317959712992888', '59.944009748667085,30.307251477097452', '59.94361511698195,30.296458267694106', '59.950135504584146,30.317376280145254', '59.9523769440621,30.32253749333904', '59.95565593564339,30.323817658791085', '59.95644426335898,30.311441730955266', '59.950904515726606,30.29605057225126', '59.958053090433545,30.337466237833723', '59.95906791244405,30.34599373335368', '59.94514117249714,30.35940156056313', '59.94274609343554,30.352902888989774', '59.94372882115448,30.36753530439455',
        '59.93101194119662,30.361332748434506', '59.933428293426324,30.34261350563611', '59.928258658603255,30.346882724552415', '59.928901627564066,30.334386205358896', '59.91892345146511,30.336652564583346', '59.922076057410614,30.314321993209887', '59.91876147831626,30.31195564311929', '59.92229113870166,30.299353121663443', '59.97023148674408,30.252277561230585', '59.960045967141575,30.302884197444655', '59.96604664786662,30.311888692667708', '59.94265603037667,30.27728175802622', '59.95282261383769,30.331717299995944', '59.94716448503993,30.33402013621526', '59.93434378661421,30.334805059537757', '59.92315962288004,30.335027790279127', '59.925105564008696,30.327098750858567', '59.92221327954031,30.31777582189534', '59.91869909838222,30.289807461958844', '59.916814304811496,30.297327516891528', '59.91620595095579,30.279217241622973', '59.925887951725194,30.296867895231116', '59.932219278901776,30.29456076590577',
        '59.9250179260502,30.297827481699642', '59.92806350722984,30.302710604300955', '59.92770664129285,30.311482715187594', '59.929786388664475,30.314460181980394', '59.93215369914597,30.321421693079173', '59.94111255589216,30.324640345206717', '59.9424647253882,30.326512097526574', '59.941476371293675,30.318608594097895', '59.93602785807493,30.331128716206876', '59.93582103549759,30.338310814113356', '59.938045599815986,30.341742967721075', '59.92971983599994,30.329240441060392', '59.92736923314747,30.319901204056805', '59.9242939088113,30.317657375126146', '59.9220126082291,30.303051781156682', '59.92061400558612,30.287157869024668', '59.91671545879402,30.281343697715783', '59.93328294721695,30.263042449951172', '59.94143295017862,30.290714692964684', '59.94249739767321,30.276082705822773', '59.9461635904984,30.271625518798828', '59.94886853683019,30.28552794508869', '59.956819190541026,30.300417422986356', '59.95756194219035,30.286415004520677', '59.94797429161466,30.23160352371633', '59.95308251343629,30.288383960723877', '59.935182285645,30.260467529296875', '59.93661542465805,30.26590361521812', '59.938232953110656,30.270726441813167', '59.94418621376012,30.274077702197246', '59.944043064222214,30.263900756835937', '59.94304615963028,30.288740587129723', '59.941986673414746,30.299663398764096', '59.93810203178096,30.294358204118907', '59.92850229990839,30.304954433231614', '59.927990284972864,30.308183383313007', '59.927642127418416,30.31149387359619', '59.93020516066621,30.311434650211595', '59.931474884428226,30.3175243359874', '59.92865906412573,30.315444230509456', '59.92433735269663,30.307923746004235', '59.92494985871062,30.297928331710864', '59.92660881599055,30.29608941025799', '59.92513416732856,30.290449046879075', '59.92363902169741,30.291715907369507', '59.92345664002469,30.29919776832685', '59.91985138999738,30.29498777279514', '59.91861821934461,30.296125887252856', '59.91818800808479,30.292447614774573', '59.915923067036445,30.30752935388591', '59.91147706070152,30.307374000549316', '59.913453161034006,30.28354783047689', '59.921301753219915,30.28170847814181', '59.922264468743236,30.285836506518535', '59.926669245665884,30.28564639054821', '59.933072022430466,30.301026820088736', '59.938391606052335,30.323291300155688', '59.938108051141164,30.32710089610191', '59.93595820078471,30.335724735050462', '59.93804656701572,30.339689254760742', '59.94446154932081,30.326324129418935', '59.94279725079709,30.3222840782837', '59.9575353007485,30.355379962711595', '59.961504670231775,30.35276383976452', '59.95904954344251,30.345815849723294', '59.966455618874654,30.34319972677622', '59.964958253996116,30.34704193880316', '59.96070078021002,30.33114695470431', '59.95943625732173,30.326841258793138', '59.95996819658226,30.316909360990394', '59.957545613228824,30.307472275744658', '59.959080265883415,30.312417410023045', '59.95404634832257,30.302403974637855', '59.9562442289837,30.303360556717962', '59.952179034052925,30.303678989148466', '59.953018156623216,30.298529147839872', '59.94945695065904,30.303106926876353', '59.95717004981053,30.325608728744555', '59.957824919715506,30.32143993419595', '59.953977803157954,30.330881309928372', '59.960896061636014,30.29738073280896', '59.95700740473732,30.292181968688965', '59.95850126127072,30.287481879349798', '59.966200871871685,30.2995857220958', '59.964012028864445,30.304858303279616', '59.96605781739672,30.306329869490582'
    ];

    var moscow = [ '55.75305237557399,37.62239763731486', '55.75503669820926,37.61724972646334', '55.752841294454,37.61713643063558', '55.748896961503874,37.618041729874676', '55.7495094930929,37.60907864518231', '55.7502863753379,37.60472681475221', '55.752853973873044,37.605333638348384', '55.75550592695554,37.60940651904093', '55.756882427484236,37.61507949850056', '55.75937026859799,37.61161150963744', '55.75870621589309,37.61911654393771', '55.759562841776585,37.62547938807984', '55.75663345359026,37.630407571268734', '55.75688242757634,37.622334336920176', '55.75280856965656,37.62816052447306', '55.74905975653018,37.6244871855306', '55.74685942687692,37.61215932332561', '55.74519499722205,37.60410454226076', '55.74258727621672,37.60700433238526', '55.739248680088586,37.60869133446249', '55.73699947512529,37.60653634060873', '55.73936380032439,37.60589668745524', '55.74056765209039,37.61679418050335', '55.74457503002232,37.614154886832694', '55.74749264284155,37.62478136937716', '55.74214144592179,37.62912311533',
        '55.74454797504594,37.63443431875203', '55.7396589080473,37.62852230051067', '55.74240657719517,37.624923419061815', '55.7528487814531,37.59772624922334', '55.75261886121572,37.58705878244655', '55.74846919785281,37.588097977677535', '55.75093040409457,37.595925092173275', '55.752966639081414,37.60085306188557', '55.757513186649,37.5985345600202', '55.758297999186624,37.60978052610881', '55.764640876408706,37.60549414131674', '55.76192749046693,37.60240831354167', '55.75778111150159,37.59424109448446', '55.760068718994745,37.59673426146037', '55.75953978125031,37.584901857153454', '55.755775556047546,37.584139680548105', '55.765107695934375,37.59173462385661', '55.76960780566955,37.59592595131835', '55.7675178784364,37.60086035676068', '55.77046081249588,37.61122848940431', '55.77310239578519,37.60906126452028', '55.770351577458335,37.621599626436364', '55.76737242166929,37.62201247183839', '55.77257701428237,37.632497978629544', '55.76666722153303,37.63136994864908', '55.76558078727819,37.63789415359497',
        '55.760727677977584,37.644249701552326', '55.75793058795097,37.64692783355713', '55.75360724259315,37.634165668278', '55.75045484083116,37.642350267997244', '55.775908052000865,37.656732917093905', '55.77344142177329,37.64805071259616', '55.770239566016365,37.643817543721525', '55.77784885385085,37.58195829417673', '55.76085360113911,37.579362773685716', '55.752415264647844,37.57496309175622', '55.74504595518786,37.54208350102999', '55.74470100552269,37.533255385933444', '55.75070506168203,37.5549988730927', '55.7459433413952,37.5507893084432', '55.75056690893239,37.56705636915285', '55.7438980430807,37.56802496878663', '55.72787303428557,37.547157812223304', '55.72723551234484,37.581340740434825', '55.7138516768497,37.577558183984365', '55.719952573151275,37.56153659778647', '55.714933750443336,37.54665913547797', '55.71751213570264,37.55757207807619', '55.711157725691606,37.56059632374672', '55.72223720294866,37.54289674732718'
    ];

    var yaroslavl = ['57.62246254908528,39.901952362270094', '57.62242141314538,39.89640212072118', '57.62156788842209,39.90183799251099', '57.624130757899515,39.8985851166799', '57.62651869614121,39.89379233118598', '57.628604731924206,39.89606180170085', '57.62548792708019,39.89101721024781', '57.62628672824163,39.89093545656942', '57.62576396212938,39.887526154452644', '57.62527152114038,39.88894654488831', '57.6264314354796,39.88460383403435', '57.625023976722126,39.885882604030485', '57.62473725055937,39.888905131738284', '57.62365420851986,39.89311544879456', '57.6224187128696,39.88697286862589', '57.62371275053538,39.88617485774739', '57.621089064607865,39.88939962342556', '57.620208906513135,39.89043120127462', '57.619218178828405,39.88255773780111', '57.62159741969822,39.87091641436564', '57.61763398098123,39.86846208572388', '57.61742246972334,39.86399534922384', '57.62592642263834,39.87241651964723', '57.62786807873297,39.86399996254477', '57.6263893273923,39.86245393753052', '57.625581739111226,39.86546916872612',
        '57.62761360173553,39.847122001228854', '57.6337318243929,39.85984125116374', '57.637396428904886,39.858937882381724', '57.63604016421664,39.86584510625107', '57.638397514704636,39.883483312733006', '57.64061023441166,39.89303927432047', '57.63291027052476,39.89380788698327', '57.63715476743901,39.890374659444205', '57.636317899320126,39.90297331736656', '57.638404520661176,39.96399979601847', '57.658006497025255,39.95642416513874', '57.659366762206304,39.96211967423733', '57.67784295135387,39.90142718561401', '57.696684587128985,39.82762598912814', '57.69736067580486,39.761550950061064', '57.58403941492921,39.85149507585447', '57.57685438520253,39.845513534964994', '57.58671000026472,39.85706376872258', '57.59576906826273,39.86792135081487', '57.60514661940267,39.8784132959554', '57.5922918544721,39.86529257250368', '57.608538805914186,39.835457074550504', '57.610767138061476,39.831543087893806', '57.626119099178624,39.83610305702314', '57.62736865792132,39.878002595796715', '57.629556890372726,39.87910616371664', '57.63007110074038,39.87456936825765', '57.62791564225333,39.873527168965666', '57.63187089446426,39.88000931640272', '57.63223194539196,39.875390767265344', '57.63271326427187,39.87093594027101', '57.63211270590837,39.8649666304118', '57.63319572555235,39.865640830103075', '57.6310404525072,39.86457824707031', '57.628973167913706,39.86357274086913', '57.6304590513618,39.8696433303121', '57.636844648308404,39.87941987477825', '57.64041441874675,39.87116682503256', '57.64045220368642,39.86731152544962', '57.63879663195212,39.86431045443169', '57.637981164523666,39.847758436189906', '57.635922430240946,39.85288381576538', '57.63405678821479,39.85081057559', '57.63546791710044,39.846764302201336', '57.633651990194366,39.844577550757094', '57.63164987409394,39.842268490810966', '57.63218542134939,39.84847576633911', '57.6380003454216,39.82318532493082', '57.64081695917595,39.82335591237643', '57.64056808519473,39.834821605472825', '57.63594597713672,39.82973506455892', '57.63415086512731,39.8358616582118', '57.620692281205095,39.84414625141653', '57.62353758364707,39.85321984233451', '57.62342819736189,39.85775685257977', '57.62108642200678,39.862497709400486', '57.620845571121194,39.85792035993654', '57.620539219987364,39.85326104069827', '57.62353758364707,39.84843778584036', '57.62194662246762,39.877281188964844', '57.60965218453739,39.87410030385945', '57.60711341101004,39.860574889025884', '57.60793290493184,39.853825807440444', '57.61357816360005,39.89538545545656', '57.6111481686833,39.906992767355405', '57.60823614394623,39.89726557658287', '57.608226258420814,39.8833485605428', '57.60675601897934,39.912312554370146', '57.58872114885926,39.846741771907546', '57.575175779325676,39.86569404602051', '57.68635202857464,39.77992687141523', '57.68817185680669,39.787653349048924', '57.682510887708865,39.79039006138919', '57.68449264916777,39.76926541276043', '57.69080107603842,39.78107528644614', '57.6596901192038,39.958142924151616', '57.650425039317966,39.94879038349609', '57.652128072001545,39.95804078542278', '57.645982518469026,39.95444705491536'
    ];

    var streetViewService = new google.maps.StreetViewService();

    if(area=="westrussia") randCoord = westrussia[Math.floor(Math.random() * westrussia.length)];
    else if(area=="saint-petersburg") randCoord = spb[Math.floor(Math.random() * spb.length)];
    else if(area=="moscow") randCoord = moscow[Math.floor(Math.random() * moscow.length)];
    else if(area=="yaroslavl") randCoord = yaroslavl[Math.floor(Math.random() * yaroslavl.length)];

    window.locLL = randCoord;

    var client = new google.maps.StreetViewService();

    getPanorama(client, 100);

    function getPanorama(client, radius)
    {
        if(radius<1000) {
            var coords = randCoord.split(",");
            client.getPanoramaByLocation(new google.maps.LatLng(coords[0], coords[1], true), radius, function (result, status) {

                if (status == google.maps.StreetViewStatus.ZERO_RESULTS) getPanorama(client, radius + 200);
                else if (status == google.maps.StreetViewStatus.OK) setPanorama(result);
            });
        }
    }

    function setPanorama(result)
    {
        var entryPanoId = result.location.pano;
        var panoramaOptions = {
            addressControl: false,
            linksControl: false,
            pano: entryPanoId,
            pov: {
                heading: Math.floor(Math.random() * 360),
                pitch:-2
            },
            zoom: 1
        };

        var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
        panorama.setVisible(true);
    }

};



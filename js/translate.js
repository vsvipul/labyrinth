var arrlang = {
  'en': {
    'language': 'Select your language',
    'how': 'HOW TO PLAY',
    'credit': 'CREDITS',
    'game': 'GAME',
    'contribute': 'Contributors',
    'statistics': 'Statistics',
    'moved': 'Player Moved :',
    'times': ' Times',
    'audio': 'Audio',
    'now': 'Now Playing : ',
    'by': ' by ',
    'share': ' Share Game ',
    'follow': 'Follow us on',
    'invent': 'Inventory',
    'badge': 'Your Badges',
    'version': 'Version',
    'license': 'License',
    'start': "Let's strat",
    'how1': "You'll see the base room with doors on it's walls. Notice the red and grey tile, there are 4 doors/openings on 4 walls.",
    'how2': "Press the upward arrow button for go to room above the current room (precisely, top left corner of your screen or north-west direction taking north towards the top of your screen)",
    'how3': "Now you can see a new block/room added. Also see that the color difference of the tiles. The bring red shows the current (red) active tile and the dark (black) tile shows the rest of tiles. Let's move a bit towards right now",
    'code': 'press right arrow',
    'how4': "We can see the tiles to the right (top-right precisely). We can see the doors towards all sides/walls of the room/block. so let's move more in the game.", 
    'how5': "We can see that there's no tile towards the top, so now we cannot move more in that direction. Let's go about making a complete grid. Do you see a way now too ? There is still an open door to explore!",
    'done': 'All done!',
    'finish': "Now it's your turn to explore, you can also contribute & create your own tiles.",
    'play': 'Play',
    'icon': 'Icons by ',
    'flaticon': 'flaticon.com',
  },
  'si': {
    'language': 'ඔබගේ භාෂාව තෝරන්න',
    'how': 'ක්‍රීඩා කරන්නේ කෙසේ ද',
    'credit': 'සම්මානය',
    'game': 'ක්‍රීඩාව',
    'contribute': 'දායකයින්',
    'statistics': 'සංඛ්‍යාමය දත්ත',
    'moved': 'ඇදීම වාර:',
    'times': '  යි',
    'audio': 'නාද',
    'now': 'දැන් වාදනය වන්නේ : ',
    'by': ' ලබා දුන්නේ, ',
    'share': ' ක්‍රීඩාව ගැන හුවමාරු කරන්න ',
    'follow': 'අපව අනුගමනය කරන්න',
    'invent': 'අතැති ද්‍රව්‍ය',
    'badge': 'ඔබගේ පදක්කම්',
    'version': 'සංස්කරණය',
    'license': 'බලපත්‍රය',
    'start': "අපි පටන් ගමු",
    'how1': "ඔබට එහි බිත්ති සමග දොරවල් ඇති ප්‍රධාන කාමරයක් දැකිය හැකි ය. රතු සහ අළු බිමක් ඇති, බිත්ති 4ක් සමඟ දොරවල්/පිටවුම් 4ක් ඇත.",
    'how2': "වත්මන් කාමරයට ඉහලින් ඇති කාමරයට යාමට ඉහළ ඊතල බොත්තම ඔබන්න (හරියටම ඔබේ තිරයේ ඉහළ වම් කෙළවරේ හෝ ඊසාන දිශාව උතුරු දෙසට ගෙන ඔබගේ තිරයේ මුදුනට ගමන් කරන්න)",
    'how3': "දැන් ඔබට තවත් බ්ලොක්/කාමරයක් දැකිය හැකිය. ටයිල්වල වර්ණ වෙනසත් දකින්න. රතු පැහැයෙන් වත්මන් (රතු) ක්‍රියාකාරී බිම දැක්වෙන අතර අනෙක් බිම් අඳුරු (කළු) බිම් ලෙස දක්නට ලැබේ. දැන් අපි තව ටිකක් ඉදිරියට යමු",
    'code': 'දකුණු ඊතලය හරින්න',
    'how4': "ඉහළට දෙසට තවත් ටයිල් එකක් නොමැති බව අපට දැක ගත හැකි ය, එනිසා දැන් අපට එම දිශාව තුළ තවදුරටත් ගමන් කළ නොහැකිය. පූර්ණ ජාලයක් සෑදීමට අපි යමු. දැන් ඔබට මාර්ගයක් දකින්නට පුළුවන්ද? ගවේෂණයට විවෘත දොරක් තවමත් තිබේ!",
    'how5': "අපිට දකුණට (වයඹ දිසාවට) ඇති බිම් දැකිය හැකි ය. අපිට කාමර/බ්ලොක්වල හැම පැත්තකට ම/බිත්තියක් දෙසට ම ඇති දොරවල් දකින්න පුළුවන්. ඉතින් අපි ක්‍රීඩාව තුළ වැඩි වැඩියෙන් ඇවිදිමු.",
    'done': 'ඔක්කොම හරි!',
    'finish': "දැන් එය ගවේෂණය කිරීම සඳහා ඔබේ අවස්ථාව, ඔබට ඔබේම බිම් සැදීමට ද දායක විය හැකිය.",
    'play': 'ක්‍රීඩා කරන්න.',
    'icon': 'අයිකන ',
    'flaticon': 'flaticon.com මඟිනි',
  }
};

$(function () {
  $('.translate').click(function () {
    var lang = $(this).attr('id');

    $('.lang').each(function (index, element) {
      $(this).text(arrlang[lang][$(this).attr('key')]);
    });
  });
});
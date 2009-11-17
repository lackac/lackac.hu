var SEARCH_PROMPT = "Keresés..."
// Array keys
var COLUMN_ORDER = 0;
var COLOR_SET = 1;
var LAYOUT = 2

// Defaults
var user_prefs = new Array('c-ms', 'cs0', 'fixed');

var search_focused = false;
var isSafari = ((parseInt(navigator.productSub)>=20020000) && (navigator.vendor.indexOf("Apple Computer")!=-1));

function iq_calendar_date() {
  // Display [month] [date] at end of author/date line
  // e.g. Posted by jamie about one day ago. Oct 31
  var months = new Array('Jan', 'Feb', 'Márc', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec');
  $('span.date').each(function() {
    var date = Date.parse($(this).text());
    if (!date) return;
    var month = months[date.getMonth()];
    var day = date.getDate();
    if (day < 10) day = '0' + day;
    $(this).parent().append('<em>'+month+' <span>'+day+'</span></em>');
  });
}

function iq_format_search_field() {
  var text_field = $('#q');
  text_field.hide();

  // Create the new search field
  search_field = $('<input/>');

  if (isSafari) {
    // Safari specifics
    search_field.attr('id', 'q_proxy_safari');
    search_field.attr('type', 'search');
    search_field.attr('results', '5');
    search_field.attr('placeholder', SEARCH_PROMPT);
  } else {
    // Mimic the Safari search box for lesser browsers
    search_field.attr('id', 'q_proxy');
    search_field.attr('type', 'text');
    if (search_field.val() == '') search_field.val(SEARCH_PROMPT);
  }
  // Add our listeners
  search_field.focus(iq_focus_search);
  search_field.blur(iq_blur_search);
  search_field.keyup(iq_copy_search_value);
  search_field.blur(iq_copy_search_value);

  text_field.parent().prepend(search_field);
}

function iq_copy_search_value() {
  var val = $(this).val();
  // proxy the values but intercept the status messasge
  var text_field = document.getElementById('q');
  text_field.val(val == SEARCH_PROMPT ? '' : val);
}

function iq_focus_search() {
  var val = $(this).val();
  // remove initial value from the search field
  if (!isSafari && val == SEARCH_PROMPT) {
    $(this).val('');
  }
  search_focused = true;
  $(this).addClass('active');
}

function iq_blur_search() {
  var val = $(this).val();
  // set default value, if no value has been entered
  if (!isSafari && val == '') {
    $(this).val(SEARCH_PROMPT);
  }
  search_focused = false;
  $(this).removeClass('active');
}

// Switch a preference
function iq_switch_pref(pref, layout) {
  user_prefs[pref] = layout;
  if ($('#theme-panel').css('display') != 'none') {
    $('#theme-panel').hide();
  }
  iq_set_body_class();
}
// Update body 'class'
function iq_set_body_class() {
  $('body').attr('class', user_prefs.join(' '));
}

// Initialise layout stuff
function iq_add_layout_switcher() {
  // Set the defaults
  iq_set_body_class();
  
  // Register the onclicks
  $('#layout-fixed').click(function(e) {
    e.preventDefault();
    iq_switch_pref(LAYOUT, 'fixed');
  });
  $('#layout-fluid').click(function(e) {
    e.preventDefault();
    iq_switch_pref(LAYOUT, 'fluid');
  });
  $('#layout-options').click(function(e) {
    e.preventDefault();
    $('#theme-panel').toggle();
  });
  $('#cs0_swatch').click(function(e) {
    e.preventDefault();
    iq_switch_pref(COLOR_SET, 'cs0');
  });
  $('#cs1_swatch').click(function(e) {
    e.preventDefault();
    iq_switch_pref(COLOR_SET, 'cs1');
  });
  $('#cs2_swatch').click(function(e) {
    e.preventDefault();
    iq_switch_pref(COLOR_SET, 'cs2');
  });
}

// Adding the date conversions and search mods here is much
// nicer than embedding it in the layout in my opinion.
$(function() {
  iq_calendar_date();
  iq_format_search_field();
  iq_add_layout_switcher();
})

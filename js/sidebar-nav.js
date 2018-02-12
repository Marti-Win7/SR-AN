Handlebars.registerHelper('if_isactive', function(condition, options) {
    if(document.title.indexOf(condition) > -1) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
var template = Handlebars.templates['sidebar-nav-template.hbr'];
var data =
{   menus: [
    {href: "index.htm", title: "Einleitung", submenus: [
        { href: "index.htm#installation", title: "Installation"},
        { href: "index.htm#erste_schritte", title: "Erste Schritte"},
        { href: "index.htm#einstellungen", title: "Globale Einstellungen"},
        { href: "index.htm#suchlauf", title: "Autocheck (AC, Suchlauf)"},
        { href: "index.htm#hilfe", title: "Hilfe"}
    ]},
    {href: "einstellungen.htm", title: "Globale Einstellungen", submenus: [
        { href: "einstellungen.htm#system", title: "System"},
        { href: "einstellungen.htm#auto-check", title: "Auto-Check"},
        { href: "einstellungen.htm#timer", title: "Timer"},
        { href: "einstellungen.htm#optimierungen", title: "Optimierungen"},
        { href: "einstellungen.htm#gui", title: "GUI"},
        { href: "einstellungen.htm#log", title: "Log"},
    ]},
    {href: "serienplaner.htm", title: "Serien-Planer", submenus: [
        { href: "serienplaner.htm#anzeigemodus", title: "Tagesübersicht / TOP30"},
        { href: "serienplaner.htm#sender-zuordnen", title: "Sender zuordnen"},
        { href: "serienplaner.htm#serien-marker", title: "Serien-Marker"},
        { href: "serienplaner.htm#timer-liste", title: "Timer-Liste"},
        { href: "serienplaner.htm#marker-hinzufuegen", title: "Marker hinzufügen"},
    ]},
	{href: "serienmarker.htm", title: "Serien-Marker", submenus: [
        { href: "serienplaner.htm#anzeigemodus", title: "Anzeige-Modus"},
        { href: "serienplaner.htm#sender-zuordnen", title: "Sender zuordnen"},
        { href: "serienplaner.htm#serien-marker", title: "Serien-Marker"},
        { href: "serienplaner.htm#timer-liste", title: "Timer-Liste"},
        { href: "serienplaner.htm#marker-hinzufuegen", title: "Marker hinzufügen"},
    ]},
	{href: "faq.htm", title: "FAQ",},
]};
var html = template(data);
$('#sidebar-menu').html(html);

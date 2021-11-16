export default {
  help(method = null) {
    return `
    
      === Array ===
  EXPAND
  To Line: Ctrl-Shift-L
  To Matching: Ctrl-Shift-M
  
  FOLD
  Fold: Alt-L, Ctrl-F1
  Fold Other: Alt-0
  Toggle Parent Fold Widget: Alt-F2
  Unfold: Alt-Shift-L
  Unfold All: Alt-Shift-0
  
  
  REMOVE TO
  Line End: Alt-Delete
  Line End Hard: Ctrl-Shift-Delete
  Line Start: Alt-Backspace
  Line Start Hard: Ctrl-Shift-Backspace
  
  SELECT/FIND
  Next: Alt-K
  End: Alt-Shift-Right
  Start: Alt-Shift-Left

  MISC
  Sort Lines: Ctrl-Alt-S
  Split Into Lines: Ctrl-Alt-L
  Toggle Recording: Ctrl-Alt-E
  Transpose Letters: Alt-Shift-X
  
  SPCK
  Open Recent Files: Ctrl-O
  Launch Preview: Ctrl-Shift-P
  Run Tasks: Ctrl-R
  Toggle Menu: Ctrl-M
      `.trim();
  }
}
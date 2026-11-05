
export function llogarit(cmimi, persona, buxheti) {
  if (
    typeof cmimi !== "number" || !Number.isFinite(cmimi) || cmimi < 0 ||
    typeof buxheti !== "number" || !Number.isFinite(buxheti) || buxheti < 0 ||
    typeof persona !== "number" || !Number.isInteger(persona) ||
    persona < 1 || persona > 5
  ) {
    return {
      ok: false,
      error: "Hyrje të pavlefshme: çmimi dhe buxheti duhet të jenë numra jo negativë, ndërsa personat numër i plotë nga 1 deri në 5."
    };
  }

  const cmimiNeCente = Math.round(cmimi * 100);
  const buxhetiNeCente = Math.round(buxheti * 100);
  const totalNeCente = cmimiNeCente * persona;
  const mbetjaNeCente = buxhetiNeCente - totalNeCente;

  return {
    ok: true,
    total: totalNeCente / 100,
    mbetja: mbetjaNeCente / 100,
    brenda: totalNeCente <= buxhetiNeCente
  };
}

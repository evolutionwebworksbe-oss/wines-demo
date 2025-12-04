/**
 * Bereken de eerstvolgende woensdaglevering
 * Als het woensdag is voor sluitingstijd, retourneer vandaag
 * Als het woensdag is na sluitingstijd of een andere dag, retourneer volgende woensdag
 */

export interface DeliveryInfo {
  deliveryDate: Date;
  daysUntilDelivery: number;
  cutoffDate: Date;
  isPastCutoff: boolean;
  formattedDeliveryDate: string;
  canOrderForThisWeek: boolean;
}

// Sluitingstijd: Dinsdag om 18:00 uur
const CUTOFF_DAY = 2; // Dinsdag (0 = Zondag, 1 = Maandag, 2 = Dinsdag, etc.)
const CUTOFF_HOUR = 18;

export function getNextWednesdayDelivery(): DeliveryInfo {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();

  // Bereken volgende woensdag
  let daysUntilWednesday = (3 - currentDay + 7) % 7;
  
  // Als het woensdag is, check of we voorbij de sluitingstijd zijn
  if (currentDay === 3 && daysUntilWednesday === 0) {
    // Het is woensdag, maar we zijn al voorbij de sluitingstijd van dinsdag
    daysUntilWednesday = 7; // Volgende woensdag
  }

  // Als het dinsdag is, check of we voorbij de sluitingstijd zijn
  if (currentDay === CUTOFF_DAY && currentHour >= CUTOFF_HOUR) {
    // Voorbij sluitingstijd, kan niet leveren deze woensdag
    daysUntilWednesday = (3 - currentDay + 7) % 7;
    if (daysUntilWednesday === 0) daysUntilWednesday = 7;
  }

  // Als daysUntilWednesday 0 is, betekent dit vandaag woensdag is en we voor sluitingstijd zijn
  if (daysUntilWednesday === 0) {
    daysUntilWednesday = 7;
  }

  const deliveryDate = new Date(now);
  deliveryDate.setDate(now.getDate() + daysUntilWednesday);
  deliveryDate.setHours(14, 0, 0, 0); // Levering om 14:00 uur

  // Bereken sluitingstijd (Dinsdag voor levering om 18:00)
  const cutoffDate = new Date(deliveryDate);
  cutoffDate.setDate(deliveryDate.getDate() - 1); // Dinsdag
  cutoffDate.setHours(CUTOFF_HOUR, 0, 0, 0);

  const isPastCutoff = now > cutoffDate;
  const canOrderForThisWeek = !isPastCutoff && daysUntilWednesday > 0;

  return {
    deliveryDate,
    daysUntilDelivery: daysUntilWednesday,
    cutoffDate,
    isPastCutoff,
    formattedDeliveryDate: formatDeliveryDate(deliveryDate),
    canOrderForThisWeek,
  };
}

export function formatDeliveryDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('nl-BE', options);
}

export function getDeliveryMessage(): string {
  const info = getNextWednesdayDelivery();
  
  if (info.daysUntilDelivery === 0) {
    return 'Levering vandaag!';
  } else if (info.daysUntilDelivery === 1) {
    return 'Levering morgen!';
  } else if (info.daysUntilDelivery <= 7) {
    return `Bestel nu voor levering op ${info.formattedDeliveryDate}`;
  } else {
    return `Volgende levering: ${info.formattedDeliveryDate}`;
  }
}

export function getCutoffMessage(): string {
  const info = getNextWednesdayDelivery();
  
  if (info.isPastCutoff) {
    return `Bestel voor ${formatDeliveryDate(info.cutoffDate)} voor levering volgende week`;
  }
  
  const hoursUntilCutoff = Math.floor(
    (info.cutoffDate.getTime() - new Date().getTime()) / (1000 * 60 * 60)
  );
  
  if (hoursUntilCutoff <= 24) {
    return `Nog maar ${hoursUntilCutoff} uur om te bestellen voor ${info.formattedDeliveryDate}!`;
  }
  
  return `Bestel voor dinsdag 18u voor ${info.formattedDeliveryDate}`;
}

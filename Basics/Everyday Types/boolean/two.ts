function getValueFromAPI(): { value: string } | null {
  if (Math.random() > 0.5) {
    return { value: 'greater' };
  } else {
    return null;
  }
}

function use(response: { value: string }) {
  console.log('Write in DB : ', response.value);
}

const x1 = getValueFromAPI();

Boolean(x1) && use(x1);
!!x1 && use(x1);

export {};

// LINK : https://youtu.be/Df-6C-Xw65g?si=tCiY7Rz8Tq5yS_ak
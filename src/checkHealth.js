export default function checkHealth(player) {
  if (player.health > 50) {
    return 'Healthy';
  } if (player.health < 50 && player.health > 15) {
    return 'Wounded';
  }
  return 'Critical';
}

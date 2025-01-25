import * as migration_20250125_061735_initial_migration from './20250125_061735_initial_migration';

export const migrations = [
  {
    up: migration_20250125_061735_initial_migration.up,
    down: migration_20250125_061735_initial_migration.down,
    name: '20250125_061735_initial_migration'
  },
];

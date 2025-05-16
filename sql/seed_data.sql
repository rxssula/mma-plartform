-- Seed data for MMA Platform

-- Insert Weight Classes
INSERT INTO "weight-classes" (id, name, "maxWeightKg", "minWeightKg") VALUES
  (gen_random_uuid(), 'Flyweight', 56.7, 52.2),
  (gen_random_uuid(), 'Bantamweight', 61.2, 56.7),
  (gen_random_uuid(), 'Featherweight', 65.8, 61.2),
  (gen_random_uuid(), 'Lightweight', 70.3, 65.8),
  (gen_random_uuid(), 'Welterweight', 77.1, 70.3),
  (gen_random_uuid(), 'Middleweight', 83.9, 77.1),
  (gen_random_uuid(), 'Light Heavyweight', 93.0, 83.9),
  (gen_random_uuid(), 'Heavyweight', 120.2, 93.0);

DO $$
DECLARE
  event1_id UUID := gen_random_uuid();
  event2_id UUID := gen_random_uuid();
BEGIN
  -- Insert Events
  INSERT INTO "events" (id, name, location, date, organization, description) VALUES
    (event1_id, 'Ultimate Championship 300', 'Las Vegas, NV', '2023-12-15', 'UFC', 'Milestone championship event'),
    (event2_id, 'Fight Night 45', 'London, UK', '2023-11-20', 'UFC', 'European showcase event');
END $$;

-- Sample Fighters and Fights
DO $$
DECLARE
  flyweight_id UUID;
  lightweight_id UUID;
  welterweight_id UUID;
  heavyweight_id UUID;

  fighter1_id UUID := gen_random_uuid();
  fighter2_id UUID := gen_random_uuid();
  fighter3_id UUID := gen_random_uuid();
  fighter4_id UUID := gen_random_uuid();

  event1_id UUID;
BEGIN
  -- Get Weight Class IDs
  SELECT id INTO flyweight_id FROM "weight-classes" WHERE name = 'Flyweight';
  SELECT id INTO lightweight_id FROM "weight-classes" WHERE name = 'Lightweight';
  SELECT id INTO welterweight_id FROM "weight-classes" WHERE name = 'Welterweight';
  SELECT id INTO heavyweight_id FROM "weight-classes" WHERE name = 'Heavyweight';

  -- Get Event ID
  SELECT id INTO event1_id FROM "events" WHERE name = 'Ultimate Championship 300';

  -- Insert Fighters
  INSERT INTO "fighters" (id, "firstName", "lastName", country, wins, losses, draws, knockouts, submissions, decisions, age, "heightInCm", "weightInKg", "weightClassId") VALUES
    (fighter1_id, 'Alex', 'Johnson', 'USA', 15, 2, 0, 8, 5, 2, 28, 175, 70, lightweight_id),
    (fighter2_id, 'Yuri', 'Petrov', 'Russia', 12, 3, 1, 6, 4, 2, 29, 178, 69, lightweight_id),
    (fighter3_id, 'Carlos', 'Silva', 'Brazil', 18, 4, 0, 5, 10, 3, 31, 188, 110, heavyweight_id),
    (fighter4_id, 'James', 'Wilson', 'UK', 10, 2, 0, 7, 2, 1, 26, 180, 77, welterweight_id);

  -- Insert Fights
  INSERT INTO "fights" (id, "fighter1Id", "fighter2Id", "eventId", result, "winMethod", "weightClassId", rounds, "scheduledRounds") VALUES
    (gen_random_uuid(), fighter1_id, fighter2_id, event1_id, 'FIGHTER1_WIN', 'KNOCKOUT', lightweight_id, 2, 5),
    (gen_random_uuid(), fighter3_id, fighter4_id, event1_id, 'PENDING', 'PENDING', heavyweight_id, 0, 5);
END $$;

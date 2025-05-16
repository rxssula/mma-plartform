-- MMA Platform Database Schema

-- Weight Classes Table
CREATE TABLE "weight-classes" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" VARCHAR(255) NOT NULL UNIQUE,
  "maxWeightKg" INTEGER NOT NULL,
  "minWeightKg" INTEGER NOT NULL
);

-- Events Table
CREATE TABLE "events" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" VARCHAR(255) NOT NULL,
  "location" VARCHAR(255) NOT NULL,
  "date" TIMESTAMP NOT NULL,
  "organization" VARCHAR(255) NOT NULL,
  "description" TEXT
);

-- Fighters Table
CREATE TABLE "fighters" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "firstName" VARCHAR(255) NOT NULL,
  "lastName" VARCHAR(255) NOT NULL,
  "country" VARCHAR(255) NOT NULL,
  "wins" INTEGER NOT NULL DEFAULT 0,
  "losses" INTEGER NOT NULL DEFAULT 0,
  "draws" INTEGER NOT NULL DEFAULT 0,
  "knockouts" INTEGER NOT NULL DEFAULT 0,
  "submissions" INTEGER NOT NULL DEFAULT 0,
  "decisions" INTEGER NOT NULL DEFAULT 0,
  "age" INTEGER NOT NULL,
  "heightInCm" INTEGER NOT NULL,
  "weightInKg" INTEGER NOT NULL,
  "weightClassId" UUID NOT NULL,
  FOREIGN KEY ("weightClassId") REFERENCES "weight-classes" ("id")
);

-- Create Enum Types for Fight
CREATE TYPE "fight_result" AS ENUM (
  'FIGHTER1_WIN',
  'FIGHTER2_WIN',
  'DRAW',
  'NO_CONTEST',
  'PENDING'
);

CREATE TYPE "win_method" AS ENUM (
  'KNOCKOUT',
  'TECHNICAL_KNOCKOUT',
  'SUBMISSION',
  'DECISION',
  'DISQUALIFICATION',
  'FORFEIT',
  'NO_CONTEST',
  'PENDING'
);

-- Fights Table
CREATE TABLE "fights" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "fighter1Id" UUID NOT NULL,
  "fighter2Id" UUID NOT NULL,
  "eventId" UUID NOT NULL,
  "result" fight_result NOT NULL DEFAULT 'PENDING',
  "winMethod" win_method NOT NULL DEFAULT 'PENDING',
  "weightClassId" UUID NOT NULL,
  "rounds" INTEGER NOT NULL,
  "scheduledRounds" INTEGER NOT NULL,
  FOREIGN KEY ("fighter1Id") REFERENCES "fighters" ("id"),
  FOREIGN KEY ("fighter2Id") REFERENCES "fighters" ("id"),
  FOREIGN KEY ("eventId") REFERENCES "events" ("id"),
  FOREIGN KEY ("weightClassId") REFERENCES "weight-classes" ("id")
);

-- Add indexes for better performance
CREATE INDEX idx_fighters_weightclass ON "fighters" ("weightClassId");
CREATE INDEX idx_fights_fighters ON "fights" ("fighter1Id", "fighter2Id");
CREATE INDEX idx_fights_event ON "fights" ("eventId");
CREATE INDEX idx_fights_weightclass ON "fights" ("weightClassId"); 
#!/bin/bash -e

# This script is used to apply a migration to the database.

# The script is called with the following arguments:
# $1: The name of the migration to apply.

# Get the name of the migration file to apply.
MIGRATION_NAME=$1

# Database configs based on:
export PGUSER=postgres
export PGPASSWORD=postgres
export PGHOST=localhost
export PGPORT=5433
export PGDATABASE=ts_template

echo "Applying migration: $MIGRATION_NAME"

# Apply the migration to the database.
psql -v ON_ERROR_STOP=1 -f "$MIGRATION_NAME"

echo "Migration applied successfully: $MIGRATION_NAME"

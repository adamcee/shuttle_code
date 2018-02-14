psql -c "CREATE ROLE shuttle_code_dev WITH PASSWORD 'ShuttleC0de!';"
psql -c "CREATE DATABASE shuttle_code_dev;"
psql -c "GRANT ALL PRIVILEGES ON DATABASE shuttle_code_dev TO shuttle_code_dev;"
psql -c "ALTER ROLE shuttle_code_dev WITH LOGIN;"

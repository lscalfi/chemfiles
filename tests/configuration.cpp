// Chemfiles, a modern library for chemistry file reading and writing
// Copyright (C) Guillaume Fraux and contributors -- BSD license

#include <catch.hpp>
#include <fstream>

#include "helpers.hpp"
#include "chemfiles/Configuration.hpp"
#include "chemfiles/generic.hpp"
#include "chemfiles.hpp"
using namespace chemfiles;

TEST_CASE("Configuration") {
    CHECK(Configuration::rename("foo") == "foo");
    CHECK(Configuration::rename("Oh") == "O");
    CHECK(Configuration::rename("Oz") == "O");
    CHECK(Configuration::rename("N2") == "N4");

    chemfiles::add_configuration("another_config");
    CHECK(Configuration::rename("Oz") == "F");
}

TEST_CASE("Atom type renaming") {
    SECTION("Same name and type") {
        auto tmpfile = NamedTempPath(".xyz");

        {
            std::ofstream file(tmpfile);
            file << "3" << std::endl << std::endl;
            file << "Oh 1 2 3" << std::endl;
            file << "Oz 3 2 1" << std::endl;
            file << "N  0 3 9" << std::endl;
        }

        auto frame = Trajectory(tmpfile).read();
        CHECK(frame.natoms() == 3);
        auto topology = frame.topology();
        CHECK(topology[0].name() == "Oh");
        CHECK(topology[0].type() == "O");

        CHECK(topology[1].name() == "Oz");
        CHECK(topology[1].type() == "F");

        CHECK(topology[2].name() == "N");
        CHECK(topology[2].type() == "N");
    }

    SECTION("Different name and type") {
        auto tmpfile = NamedTempPath(".pdb");

        {
            std::ofstream file(tmpfile);
            auto content =
"ATOM      1 Oh   LIG     1       1.000   0.000   0.000  1.00  0.00          Oh\n"
"ATOM      1 Oh   LIG     1       2.000   0.000   0.000  1.00  0.00          F \n"
"ATOM      1  N   LIG     1       3.000   0.000   0.000  1.00  0.00          N \n"
"ATOM      1  N   LIG     1       4.000   0.000   0.000  1.00  0.00          Zn\n"
"END\n";
            file << content << std::endl;
        }

        auto frame = Trajectory(tmpfile).read();
        CHECK(frame.natoms() == 4);
        auto topology = frame.topology();
        CHECK(topology[0].name() == "Oh");
        CHECK(topology[0].type() == "O");

        CHECK(topology[1].name() == "Oh");
        CHECK(topology[1].type() == "F");

        CHECK(topology[2].name() == "N");
        CHECK(topology[2].type() == "N");

        CHECK(topology[3].name() == "N");
        CHECK(topology[3].type() == "Zn");
    }
}

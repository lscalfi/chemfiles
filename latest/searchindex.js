Search.setIndex({envversion:49,filenames:["capi/chfl_atom","capi/chfl_cell","capi/chfl_frame","capi/chfl_selection","capi/chfl_topology","capi/chfl_trajectory","capi/errors","capi/index","classes/atom","classes/errors","classes/frame","classes/index","classes/logger","classes/selection","classes/topology","classes/trajectory","classes/unitcell","devdoc/contributing","devdoc/file","devdoc/format","devdoc/internals","example","formats","index","installation","others","overview","selections"],objects:{"":{"Atom::Atom":[8,1,1,"_CPPv2N4Atom4AtomEv"],"Atom::atomic_number":[8,1,1,"_CPPv2N4Atom13atomic_numberEv"],"Atom::covalent_radius":[8,1,1,"_CPPv2N4Atom15covalent_radiusEv"],"Atom::full_name":[8,1,1,"_CPPv2N4Atom9full_nameEv"],"Atom::vdw_radius":[8,1,1,"_CPPv2N4Atom10vdw_radiusEv"],"Format::read":[19,1,1,"_CPPv2N6Format4readER5Frame"],"Format::read_step":[19,1,1,"_CPPv2N6Format9read_stepE6size_tR5Frame"],"Format::write":[19,1,1,"_CPPv2N6Format5writeERK5Frame"],"Frame::Frame":[10,1,1,"_CPPv2N5Frame5FrameEv"],"Frame::add_velocities":[10,1,1,"_CPPv2N5Frame14add_velocitiesEv"],"Frame::guess_topology":[10,1,1,"_CPPv2N5Frame14guess_topologyEv"],"Frame::natoms":[10,1,1,"_CPPv2N5Frame6natomsEv"],"Frame::resize":[10,1,1,"_CPPv2N5Frame6resizeE6size_t"],"Frame::set_topology":[10,1,1,"_CPPv2N5Frame12set_topologyERK8Topology"],"Logger::callback":[12,1,1,"_CPPv2N6Logger8callbackE12logging_cb_t"],"Logger::set_level":[12,1,1,"_CPPv2N6Logger9set_levelE8LogLevel"],"Logger::silent":[12,1,1,"_CPPv2N6Logger6silentEv"],"Logger::to_file":[12,1,1,"_CPPv2N6Logger7to_fileERKNSt6stringE"],"Logger::to_stderr":[12,1,1,"_CPPv2N6Logger9to_stderrEv"],"Logger::to_stdout":[12,1,1,"_CPPv2N6Logger9to_stdoutEv"],"Selection::Selection":[13,1,1,"_CPPv2N9Selection9SelectionERKNSt6stringE"],"Selection::evaluate":[13,1,1,"_CPPv2N9Selection8evaluateERK5Frame"],"Selection::list":[13,1,1,"_CPPv2N9Selection4listERK5Frame"],"Selection::size":[13,1,1,"_CPPv2N9Selection4sizeEv"],"Topology::angles":[14,1,1,"_CPPv2N8Topology6anglesEv"],"Topology::append":[14,1,1,"_CPPv2N8Topology6appendERK4Atom"],"Topology::bonds":[14,1,1,"_CPPv2N8Topology5bondsEv"],"Topology::dihedrals":[14,1,1,"_CPPv2N8Topology9dihedralsEv"],"Topology::isangle":[14,1,1,"_CPPv2N8Topology7isangleE6size_t6size_t6size_t"],"Topology::isbond":[14,1,1,"_CPPv2N8Topology6isbondE6size_t6size_t"],"Topology::isdihedral":[14,1,1,"_CPPv2N8Topology10isdihedralE6size_t6size_t6size_t6size_t"],"Topology::remove":[14,1,1,"_CPPv2N8Topology6removeE6size_t"],"Topology::resize":[14,1,1,"_CPPv2N8Topology6resizeE6size_t"],"Trajectory::Trajectory":[15,1,1,"_CPPv2N10Trajectory10TrajectoryERKNSt6stringEcRKNSt6stringE"],"Trajectory::done":[15,1,1,"_CPPv2N10Trajectory4doneEv"],"Trajectory::read":[15,1,1,"_CPPv2N10Trajectory4readEv"],"Trajectory::read_step":[15,1,1,"_CPPv2N10Trajectory9read_stepEK6size_t"],"Trajectory::set_cell":[15,1,1,"_CPPv2N10Trajectory8set_cellERK8UnitCell"],"Trajectory::set_topology":[15,1,1,"_CPPv2N10Trajectory12set_topologyERKNSt6stringERKNSt6stringE"],"Trajectory::write":[15,1,1,"_CPPv2N10Trajectory5writeERK5Frame"],"TrajectoryFactory::by_extension":[20,1,1,"_CPPv2N17TrajectoryFactory12by_extensionERKNSt6stringE"],"TrajectoryFactory::format":[20,1,1,"_CPPv2N17TrajectoryFactory6formatERKNSt6stringE"],"TrajectoryFactory::get":[20,1,1,"_CPPv2N17TrajectoryFactory3getEv"],"TrajectoryFactory::register_extension":[20,1,1,"_CPPv2N17TrajectoryFactory18register_extensionERKNSt6stringE20trajectory_builder_t"],"TrajectoryFactory::register_format":[20,1,1,"_CPPv2N17TrajectoryFactory15register_formatERKNSt6stringE20trajectory_builder_t"],"UnitCell::UnitCell":[16,1,1,"_CPPv2N8UnitCell8UnitCellEv"],"UnitCell::raw_matricial":[16,1,1,"_CPPv2N8UnitCell13raw_matricialEA3_A3_d"],"UnitCell::set_a":[16,1,1,"_CPPv2N8UnitCell5set_aEd"],"UnitCell::set_alpha":[16,1,1,"_CPPv2N8UnitCell9set_alphaEd"],"UnitCell::set_b":[16,1,1,"_CPPv2N8UnitCell5set_bEd"],"UnitCell::set_beta":[16,1,1,"_CPPv2N8UnitCell8set_betaEd"],"UnitCell::set_c":[16,1,1,"_CPPv2N8UnitCell5set_cEd"],"UnitCell::set_gamma":[16,1,1,"_CPPv2N8UnitCell9set_gammaEd"],"UnitCell::type":[16,1,1,"_CPPv2N8UnitCell4typeE8CellType"],"UnitCell::volume":[16,1,1,"_CPPv2N8UnitCell6volumeEv"],"UnitCell::wrap":[16,1,1,"_CPPv2N8UnitCell4wrapERK8Vector3D"],"chemfiles::Atom":[8,2,1,"_CPPv2N9chemfiles4AtomE"],"chemfiles::Atom::AtomType":[8,3,1,"_CPPv2N9chemfiles4Atom8AtomTypeE"],"chemfiles::Atom::COARSE_GRAINED":[8,2,1,"_CPPv2N9chemfiles4Atom14COARSE_GRAINEDE"],"chemfiles::Atom::DUMMY":[8,2,1,"_CPPv2N9chemfiles4Atom5DUMMYE"],"chemfiles::Atom::ELEMENT":[8,2,1,"_CPPv2N9chemfiles4Atom7ELEMENTE"],"chemfiles::Atom::UNDEFINED":[8,2,1,"_CPPv2N9chemfiles4Atom9UNDEFINEDE"],"chemfiles::Atom::charge":[8,1,1,"_CPPv2N9chemfiles4Atom6chargeEv"],"chemfiles::Atom::mass":[8,1,1,"_CPPv2N9chemfiles4Atom4massEv"],"chemfiles::Atom::name":[8,1,1,"_CPPv2N9chemfiles4Atom4nameEv"],"chemfiles::Atom::set_charge":[8,1,1,"_CPPv2N9chemfiles4Atom10set_chargeEf"],"chemfiles::Atom::set_mass":[8,1,1,"_CPPv2N9chemfiles4Atom8set_massEf"],"chemfiles::Atom::set_name":[8,1,1,"_CPPv2N9chemfiles4Atom8set_nameERKNSt6stringE"],"chemfiles::Atom::set_type":[8,1,1,"_CPPv2N9chemfiles4Atom8set_typeE8AtomType"],"chemfiles::Atom::type":[8,1,1,"_CPPv2N9chemfiles4Atom4typeEv"],"chemfiles::BinaryFile":[18,2,1,"_CPPv2N9chemfiles10BinaryFileE"],"chemfiles::DCD":[19,2,1,"_CPPv2N9chemfiles3DCDE"],"chemfiles::Error":[9,2,1,"_CPPv2N9chemfiles5ErrorE"],"chemfiles::File":[18,2,1,"_CPPv2N9chemfiles4FileE"],"chemfiles::File::APPEND":[18,2,1,"_CPPv2N9chemfiles4File6APPENDE"],"chemfiles::File::Mode":[18,3,1,"_CPPv2N9chemfiles4File4ModeE"],"chemfiles::File::READ":[18,2,1,"_CPPv2N9chemfiles4File4READE"],"chemfiles::File::WRITE":[18,2,1,"_CPPv2N9chemfiles4File5WRITEE"],"chemfiles::File::filename":[18,1,1,"_CPPv2N9chemfiles4File8filenameEv"],"chemfiles::File::is_open":[18,1,1,"_CPPv2N9chemfiles4File7is_openEv"],"chemfiles::File::mode":[18,1,1,"_CPPv2N9chemfiles4File4modeEv"],"chemfiles::FileError":[9,2,1,"_CPPv2N9chemfiles9FileErrorE"],"chemfiles::Format":[19,2,1,"_CPPv2N9chemfiles6FormatE"],"chemfiles::Format::Format":[19,1,1,"_CPPv2N9chemfiles6Format6FormatER4File"],"chemfiles::Format::description":[19,1,1,"_CPPv2N9chemfiles6Format11descriptionEv"],"chemfiles::Format::nsteps":[19,1,1,"_CPPv2N9chemfiles6Format6nstepsEv"],"chemfiles::FormatError":[9,2,1,"_CPPv2N9chemfiles11FormatErrorE"],"chemfiles::Frame":[10,2,1,"_CPPv2N9chemfiles5FrameE"],"chemfiles::Frame::cell":[10,1,1,"_CPPv2N9chemfiles5Frame4cellEv"],"chemfiles::Frame::positions":[10,1,1,"_CPPv2N9chemfiles5Frame9positionsEv"],"chemfiles::Frame::set_cell":[10,1,1,"_CPPv2N9chemfiles5Frame8set_cellERK8UnitCell"],"chemfiles::Frame::set_step":[10,1,1,"_CPPv2N9chemfiles5Frame8set_stepE6size_t"],"chemfiles::Frame::step":[10,1,1,"_CPPv2N9chemfiles5Frame4stepEv"],"chemfiles::Frame::topology":[10,1,1,"_CPPv2N9chemfiles5Frame8topologyEv"],"chemfiles::Frame::velocities":[10,1,1,"_CPPv2N9chemfiles5Frame10velocitiesEv"],"chemfiles::GRO":[19,2,1,"_CPPv2N9chemfiles3GROE"],"chemfiles::LAMMPS":[19,2,1,"_CPPv2N9chemfiles6LAMMPSE"],"chemfiles::Logger":[12,2,1,"_CPPv2N9chemfiles6LoggerE"],"chemfiles::Logger::CALLBACK":[12,2,1,"_CPPv2N9chemfiles6Logger8CALLBACKE"],"chemfiles::Logger::FILE":[12,2,1,"_CPPv2N9chemfiles6Logger4FILEE"],"chemfiles::Logger::LogBackend":[12,3,1,"_CPPv2N9chemfiles6Logger10LogBackendE"],"chemfiles::Logger::SILENT":[12,2,1,"_CPPv2N9chemfiles6Logger6SILENTE"],"chemfiles::Logger::STDERR":[12,2,1,"_CPPv2N9chemfiles6Logger6STDERRE"],"chemfiles::Logger::STDOUT":[12,2,1,"_CPPv2N9chemfiles6Logger6STDOUTE"],"chemfiles::Logger::backend":[12,1,1,"_CPPv2N9chemfiles6Logger7backendEv"],"chemfiles::Logger::debug":[12,1,1,"_CPPv2N9chemfiles6Logger5debugEDpR4Args"],"chemfiles::Logger::error":[12,1,1,"_CPPv2N9chemfiles6Logger5errorEDpR4Args"],"chemfiles::Logger::info":[12,1,1,"_CPPv2N9chemfiles6Logger4infoEDpR4Args"],"chemfiles::Logger::level":[12,1,1,"_CPPv2N9chemfiles6Logger5levelEv"],"chemfiles::Logger::log":[12,1,1,"_CPPv2N9chemfiles6Logger3logE8LogLevelDpR4Args"],"chemfiles::Logger::warn":[12,1,1,"_CPPv2N9chemfiles6Logger4warnEDpR4Args"],"chemfiles::Match":[13,2,1,"_CPPv2N9chemfiles5MatchE"],"chemfiles::Match::MAX_MATCH_SIZE":[13,4,1,"_CPPv2N9chemfiles5Match14MAX_MATCH_SIZEE"],"chemfiles::Match::operator[]":[13,1,1,"_CPPv2N9chemfiles5MatchixE6size_t"],"chemfiles::Match::size":[13,1,1,"_CPPv2N9chemfiles5Match4sizeEv"],"chemfiles::MemoryError":[9,2,1,"_CPPv2N9chemfiles11MemoryErrorE"],"chemfiles::MolfileFormat":[19,3,1,"_CPPv2N9chemfiles13MolfileFormatE"],"chemfiles::Selection":[13,2,1,"_CPPv2N9chemfiles9SelectionE"],"chemfiles::SelectionError":[9,2,1,"_CPPv2N9chemfiles14SelectionErrorE"],"chemfiles::TRJ":[19,2,1,"_CPPv2N9chemfiles3TRJE"],"chemfiles::TRR":[19,2,1,"_CPPv2N9chemfiles3TRRE"],"chemfiles::TextFile":[18,2,1,"_CPPv2N9chemfiles8TextFileE"],"chemfiles::TextFile::eof":[18,1,1,"_CPPv2N9chemfiles8TextFile3eofEv"],"chemfiles::TextFile::getline":[18,1,1,"_CPPv2N9chemfiles8TextFile7getlineEv"],"chemfiles::TextFile::nlines":[18,1,1,"_CPPv2N9chemfiles8TextFile6nlinesEv"],"chemfiles::TextFile::operator&gt;&gt;":[18,1,1,"_CPPv2N9chemfiles8TextFilersERNSt6stringE"],"chemfiles::TextFile::operator&lt;&lt;":[18,1,1,"_CPPv2N9chemfiles8TextFilelsEPKc"],"chemfiles::TextFile::readlines":[18,1,1,"_CPPv2N9chemfiles8TextFile9readlinesE6size_t"],"chemfiles::TextFile::rewind":[18,1,1,"_CPPv2N9chemfiles8TextFile6rewindEv"],"chemfiles::TextFile::writeline":[18,1,1,"_CPPv2N9chemfiles8TextFile9writelineERKNSt6stringE"],"chemfiles::TextFile::writelines":[18,1,1,"_CPPv2N9chemfiles8TextFile10writelinesERKNSt6vectorINSt6stringEEE"],"chemfiles::Topology":[14,2,1,"_CPPv2N9chemfiles8TopologyE"],"chemfiles::Topology::Topology":[14,1,1,"_CPPv2N9chemfiles8Topology8TopologyEv"],"chemfiles::Topology::add_bond":[14,1,1,"_CPPv2N9chemfiles8Topology8add_bondE6size_t6size_t"],"chemfiles::Topology::clear_bonds":[14,1,1,"_CPPv2N9chemfiles8Topology11clear_bondsEv"],"chemfiles::Topology::natoms":[14,1,1,"_CPPv2N9chemfiles8Topology6natomsEv"],"chemfiles::Topology::operator[]":[14,1,1,"_CPPv2N9chemfiles8TopologyixE6size_t"],"chemfiles::Topology::remove_bond":[14,1,1,"_CPPv2N9chemfiles8Topology11remove_bondE6size_t6size_t"],"chemfiles::Trajectory":[15,2,1,"_CPPv2N9chemfiles10TrajectoryE"],"chemfiles::Trajectory::nsteps":[15,1,1,"_CPPv2N9chemfiles10Trajectory6nstepsEv"],"chemfiles::TrajectoryFactory":[20,2,1,"_CPPv2N9chemfiles17TrajectoryFactoryE"],"chemfiles::UnitCell":[16,2,1,"_CPPv2N9chemfiles8UnitCellE"],"chemfiles::UnitCell::CellType":[16,3,1,"_CPPv2N9chemfiles8UnitCell8CellTypeE"],"chemfiles::UnitCell::INFINITE":[16,2,1,"_CPPv2N9chemfiles8UnitCell8INFINITEE"],"chemfiles::UnitCell::ORTHORHOMBIC":[16,2,1,"_CPPv2N9chemfiles8UnitCell12ORTHORHOMBICE"],"chemfiles::UnitCell::TRICLINIC":[16,2,1,"_CPPv2N9chemfiles8UnitCell9TRICLINICE"],"chemfiles::UnitCell::UnitCell":[16,1,1,"_CPPv2N9chemfiles8UnitCell8UnitCellERR8UnitCell"],"chemfiles::UnitCell::a":[16,1,1,"_CPPv2N9chemfiles8UnitCell1aEv"],"chemfiles::UnitCell::alpha":[16,1,1,"_CPPv2N9chemfiles8UnitCell5alphaEv"],"chemfiles::UnitCell::b":[16,1,1,"_CPPv2N9chemfiles8UnitCell1bEv"],"chemfiles::UnitCell::beta":[16,1,1,"_CPPv2N9chemfiles8UnitCell4betaEv"],"chemfiles::UnitCell::c":[16,1,1,"_CPPv2N9chemfiles8UnitCell1cEv"],"chemfiles::UnitCell::gamma":[16,1,1,"_CPPv2N9chemfiles8UnitCell5gammaEv"],"chemfiles::UnitCell::matricial":[16,1,1,"_CPPv2N9chemfiles8UnitCell9matricialEv"],"chemfiles::UnitCell::type":[16,1,1,"_CPPv2N9chemfiles8UnitCell4typeEv"],"chemfiles::XTC":[19,2,1,"_CPPv2N9chemfiles3XTCE"],"chfl_match_t::atoms":[3,4,1,"_CPPv2N12chfl_match_t5atomsE"],"chfl_match_t::size":[3,4,1,"_CPPv2N12chfl_match_t4sizeE"],CHEMFILES_VERSION:[11,0,1,"c.CHEMFILES_VERSION"],CHEMFILES_VERSION_MAJOR:[11,0,1,"c.CHEMFILES_VERSION_MAJOR"],CHEMFILES_VERSION_MINOR:[11,0,1,"c.CHEMFILES_VERSION_MINOR"],CHEMFILES_VERSION_PATCH:[11,0,1,"c.CHEMFILES_VERSION_PATCH"],CHFL_ATOM_COARSE_GRAINED:[0,2,1,"_CPPv224CHFL_ATOM_COARSE_GRAINED"],CHFL_ATOM_DUMMY:[0,2,1,"_CPPv215CHFL_ATOM_DUMMY"],CHFL_ATOM_ELEMENT:[0,2,1,"_CPPv217CHFL_ATOM_ELEMENT"],CHFL_ATOM_TYPES:[0,3,1,"_CPPv215CHFL_ATOM_TYPES"],CHFL_ATOM_UNDEFINED:[0,2,1,"_CPPv219CHFL_ATOM_UNDEFINED"],CHFL_CELL_INFINITE:[1,2,1,"_CPPv218CHFL_CELL_INFINITE"],CHFL_CELL_ORTHORHOMBIC:[1,2,1,"_CPPv222CHFL_CELL_ORTHORHOMBIC"],CHFL_CELL_TRICLINIC:[1,2,1,"_CPPv219CHFL_CELL_TRICLINIC"],CHFL_CELL_TYPES:[1,3,1,"_CPPv215CHFL_CELL_TYPES"],CHFL_LOG_DEBUG:[6,2,1,"_CPPv214CHFL_LOG_DEBUG"],CHFL_LOG_ERROR:[6,2,1,"_CPPv214CHFL_LOG_ERROR"],CHFL_LOG_INFO:[6,2,1,"_CPPv213CHFL_LOG_INFO"],CHFL_LOG_LEVEL:[6,3,1,"_CPPv214CHFL_LOG_LEVEL"],CHFL_LOG_WARNING:[6,2,1,"_CPPv216CHFL_LOG_WARNING"],CHFL_MAX_SELECTION_SIZE:[3,0,1,"c.CHFL_MAX_SELECTION_SIZE"],chfl_atom:[0,1,1,"_CPPv29chfl_atomPKc"],chfl_atom_atomic_number:[0,1,1,"_CPPv223chfl_atom_atomic_numberPCK9CHFL_ATOMPi"],chfl_atom_charge:[0,1,1,"_CPPv216chfl_atom_chargePCK9CHFL_ATOMPf"],chfl_atom_covalent_radius:[0,1,1,"_CPPv225chfl_atom_covalent_radiusPCK9CHFL_ATOMPd"],chfl_atom_free:[0,1,1,"_CPPv214chfl_atom_freeP9CHFL_ATOM"],chfl_atom_from_frame:[0,1,1,"_CPPv220chfl_atom_from_framePCK10CHFL_FRAME6size_t"],chfl_atom_from_topology:[0,1,1,"_CPPv223chfl_atom_from_topologyPCK13CHFL_TOPOLOGY6size_t"],chfl_atom_full_name:[0,1,1,"_CPPv219chfl_atom_full_namePCK9CHFL_ATOMPCc6size_t"],chfl_atom_mass:[0,1,1,"_CPPv214chfl_atom_massPCK9CHFL_ATOMPf"],chfl_atom_name:[0,1,1,"_CPPv214chfl_atom_namePCK9CHFL_ATOMPCc6size_t"],chfl_atom_set_charge:[0,1,1,"_CPPv220chfl_atom_set_chargePC9CHFL_ATOMf"],chfl_atom_set_mass:[0,1,1,"_CPPv218chfl_atom_set_massPC9CHFL_ATOMf"],chfl_atom_set_name:[0,1,1,"_CPPv218chfl_atom_set_namePC9CHFL_ATOMPKc"],chfl_atom_set_type:[0,1,1,"_CPPv218chfl_atom_set_typePC9CHFL_ATOM16chfl_atom_type_t"],chfl_atom_type:[0,1,1,"_CPPv214chfl_atom_typePCK9CHFL_ATOMPC16chfl_atom_type_t"],chfl_atom_vdw_radius:[0,1,1,"_CPPv220chfl_atom_vdw_radiusPCK9CHFL_ATOMPd"],chfl_cell:[1,1,1,"_CPPv29chfl_cellddd"],chfl_cell_angles:[1,1,1,"_CPPv216chfl_cell_anglesPCK9CHFL_CELLPdPdPd"],chfl_cell_free:[1,1,1,"_CPPv214chfl_cell_freeP9CHFL_CELL"],chfl_cell_from_frame:[1,1,1,"_CPPv220chfl_cell_from_framePCK10CHFL_FRAME"],chfl_cell_lengths:[1,1,1,"_CPPv217chfl_cell_lengthsPCK9CHFL_CELLPdPdPd"],chfl_cell_matrix:[1,1,1,"_CPPv216chfl_cell_matrixPCK9CHFL_CELLPA3_d"],chfl_cell_set_angles:[1,1,1,"_CPPv220chfl_cell_set_anglesPC9CHFL_CELLddd"],chfl_cell_set_lengths:[1,1,1,"_CPPv221chfl_cell_set_lengthsPC9CHFL_CELLddd"],chfl_cell_set_type:[1,1,1,"_CPPv218chfl_cell_set_typePC9CHFL_CELL16chfl_cell_type_t"],chfl_cell_type:[1,1,1,"_CPPv214chfl_cell_typePCK9CHFL_CELLPC16chfl_cell_type_t"],chfl_clear_errors:[6,1,1,"_CPPv217chfl_clear_errorsv"],chfl_frame:[2,1,1,"_CPPv210chfl_frame6size_t"],chfl_frame_add_velocities:[2,1,1,"_CPPv225chfl_frame_add_velocitiesPC10CHFL_FRAME"],chfl_frame_atoms_count:[2,1,1,"_CPPv222chfl_frame_atoms_countPCK10CHFL_FRAMEP6size_t"],chfl_frame_free:[2,1,1,"_CPPv215chfl_frame_freeP10CHFL_FRAME"],chfl_frame_guess_topology:[2,1,1,"_CPPv225chfl_frame_guess_topologyPC10CHFL_FRAME"],chfl_frame_has_velocities:[2,1,1,"_CPPv225chfl_frame_has_velocitiesPCK10CHFL_FRAMEPb"],chfl_frame_positions:[2,1,1,"_CPPv220chfl_frame_positionsPC10CHFL_FRAMEPPA3_fP6size_t"],chfl_frame_resize:[2,1,1,"_CPPv217chfl_frame_resizePC10CHFL_FRAME6size_t"],chfl_frame_set_cell:[2,1,1,"_CPPv219chfl_frame_set_cellPC10CHFL_FRAMEPCK9CHFL_CELL"],chfl_frame_set_step:[2,1,1,"_CPPv219chfl_frame_set_stepPC10CHFL_FRAME6size_t"],chfl_frame_set_topology:[2,1,1,"_CPPv223chfl_frame_set_topologyPC10CHFL_FRAMEPCK13CHFL_TOPOLOGY"],chfl_frame_step:[2,1,1,"_CPPv215chfl_frame_stepPCK10CHFL_FRAMEP6size_t"],chfl_frame_velocities:[2,1,1,"_CPPv221chfl_frame_velocitiesPC10CHFL_FRAMEPPA3_fP6size_t"],chfl_last_error:[6,1,1,"_CPPv215chfl_last_errorv"],chfl_log_stderr:[6,1,1,"_CPPv215chfl_log_stderrv"],chfl_logfile:[6,1,1,"_CPPv212chfl_logfilePKc"],chfl_loglevel:[6,1,1,"_CPPv213chfl_loglevelPC16chfl_log_level_t"],chfl_match_t:[3,2,1,"_CPPv212chfl_match_t"],chfl_selection:[3,1,1,"_CPPv214chfl_selectionPKc"],chfl_selection_evalutate:[3,1,1,"_CPPv224chfl_selection_evalutatePC14CHFL_SELECTIONPCK10CHFL_FRAMEP6size_t"],chfl_selection_free:[3,1,1,"_CPPv219chfl_selection_freeP14CHFL_SELECTION"],chfl_selection_matches:[3,1,1,"_CPPv222chfl_selection_matchesPCK14CHFL_SELECTIONA_12chfl_match_t6size_t"],chfl_selection_size:[3,1,1,"_CPPv219chfl_selection_sizePCK14CHFL_SELECTIONP6size_t"],chfl_set_loglevel:[6,1,1,"_CPPv217chfl_set_loglevel16chfl_log_level_t"],chfl_strerror:[6,1,1,"_CPPv213chfl_strerror11chfl_status"],chfl_topology:[4,1,1,"_CPPv213chfl_topologyv"],chfl_topology_add_bond:[4,1,1,"_CPPv222chfl_topology_add_bondPC13CHFL_TOPOLOGY6size_t6size_t"],chfl_topology_angles:[4,1,1,"_CPPv220chfl_topology_anglesPCK13CHFL_TOPOLOGYPA3_6size_t6size_t"],chfl_topology_angles_count:[4,1,1,"_CPPv226chfl_topology_angles_countPCK13CHFL_TOPOLOGYP6size_t"],chfl_topology_append:[4,1,1,"_CPPv220chfl_topology_appendPC13CHFL_TOPOLOGYPCK9CHFL_ATOM"],chfl_topology_atoms_count:[4,1,1,"_CPPv225chfl_topology_atoms_countPCK13CHFL_TOPOLOGYP6size_t"],chfl_topology_bonds:[4,1,1,"_CPPv219chfl_topology_bondsPCK13CHFL_TOPOLOGYPA2_6size_t6size_t"],chfl_topology_bonds_count:[4,1,1,"_CPPv225chfl_topology_bonds_countPCK13CHFL_TOPOLOGYP6size_t"],chfl_topology_dihedrals:[4,1,1,"_CPPv223chfl_topology_dihedralsPCK13CHFL_TOPOLOGYPA4_6size_t6size_t"],chfl_topology_dihedrals_count:[4,1,1,"_CPPv229chfl_topology_dihedrals_countPCK13CHFL_TOPOLOGYP6size_t"],chfl_topology_free:[4,1,1,"_CPPv218chfl_topology_freeP13CHFL_TOPOLOGY"],chfl_topology_from_frame:[4,1,1,"_CPPv224chfl_topology_from_framePCK10CHFL_FRAME"],chfl_topology_isangle:[4,1,1,"_CPPv221chfl_topology_isanglePCK13CHFL_TOPOLOGY6size_t6size_t6size_tPb"],chfl_topology_isbond:[4,1,1,"_CPPv220chfl_topology_isbondPCK13CHFL_TOPOLOGY6size_t6size_tPb"],chfl_topology_isdihedral:[4,1,1,"_CPPv224chfl_topology_isdihedralPCK13CHFL_TOPOLOGY6size_t6size_t6size_t6size_tPb"],chfl_topology_remove:[4,1,1,"_CPPv220chfl_topology_removePC13CHFL_TOPOLOGY6size_t"],chfl_topology_remove_bond:[4,1,1,"_CPPv225chfl_topology_remove_bondPC13CHFL_TOPOLOGY6size_t6size_t"],chfl_trajectory_close:[5,1,1,"_CPPv221chfl_trajectory_closeP15CHFL_TRAJECTORY"],chfl_trajectory_nsteps:[5,1,1,"_CPPv222chfl_trajectory_nstepsPC15CHFL_TRAJECTORYP6size_t"],chfl_trajectory_open:[5,1,1,"_CPPv220chfl_trajectory_openPKcc"],chfl_trajectory_read:[5,1,1,"_CPPv220chfl_trajectory_readPC15CHFL_TRAJECTORYPC10CHFL_FRAME"],chfl_trajectory_read_step:[5,1,1,"_CPPv225chfl_trajectory_read_stepPC15CHFL_TRAJECTORY6size_tPC10CHFL_FRAME"],chfl_trajectory_set_topology:[5,1,1,"_CPPv228chfl_trajectory_set_topologyPC15CHFL_TRAJECTORYPCK13CHFL_TOPOLOGY"],chfl_trajectory_set_topology_file:[5,1,1,"_CPPv233chfl_trajectory_set_topology_filePC15CHFL_TRAJECTORYPKc"],chfl_trajectory_set_topology_with_format:[5,1,1,"_CPPv240chfl_trajectory_set_topology_with_formatPC15CHFL_TRAJECTORYPKcPKc"],chfl_trajectory_with_format:[5,1,1,"_CPPv227chfl_trajectory_with_formatPKccPKc"],chfl_trajectory_write:[5,1,1,"_CPPv221chfl_trajectory_writePC15CHFL_TRAJECTORYPCK10CHFL_FRAME"],chfl_version:[7,1,1,"_CPPv212chfl_versionv"]}},objnames:{"0":["c","macro","C macro"],"1":["cpp","function","C++ function"],"2":["cpp","class","C++ class"],"3":["cpp","type","C++ type"],"4":["cpp","member","C++ member"]},objtypes:{"0":"c:macro","1":"cpp:function","2":"cpp:class","3":"cpp:type","4":"cpp:member"},terms:{"10th":21,"3x3":1,"boolean":[2,27],"case":[0,1,2,3,4,5,6,17,19,22,24,27],"catch":[9,17],"char":[0,3,5,6,7,15,18],"class":[7,8,9,10,11,12,13,14,15,16],"const":[0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,18,19,20],"default":[6,8,10,15,26,27],"enum":[0,1,6,7,8,12,16,18,19],"final":[18,19,24,27],"float":[0,2,8,21],"import":24,"int":[0,8,9,21,23],"new":[0,1,2,3,4,5,6,10,17,18,21],"null":[0,1,2,3,4,5,6,7,21],"public":[3,8,10,11,12,13,14,15,16,18,19,20,21,23,25],"return":[0,1,2,3,4,5,6,7,8,9,13,19,20,21],"short":[0,19],"static":[12,13,20],"throw":[19,20],"true":[2,4,27],"try":[0,8,9,17,22],"void":[4,6,7,8,10,12,14,15,16,18,19,20,21],"while":[15,21],_free:7,a_x:16,abil:25,about:[8,19,23,26],abov:[6,7,27],absenc:2,access:[7,23],account:17,accumul:21,acess:23,acid:[0,8],activ:24,actual:[3,13],add:[2,4,10,14,17,21,22],add_bond:[14,21],add_veloc:10,addit:[7,11,23,24],addition:27,adit:24,after:[3,4,24],against:[22,24],algorithm:[2,10],all:[2,3,4,6,7,9,11,14,15,16,17,18,19,20,21,23,24,26,27],alloc:[3,7],allow:[6,7,13,18,20,23,24,26,27],alon:25,alpha:[1,16,23],alreadi:[2,10,12,18],also:[9,11,16,22,23,24,25],alwai:[13,17],amber:[22,24],ambigu:[18,27],amino:[0,8],amount:23,anaconda:24,analys:[2,4],analysi:[23,25],angl:[1,2,3,4,10,14,16,27],angle:14,angstrom:[1,16],ani:[2,4,5,9,15,16,17,18,21,23,24,26],anoth:[6,21,22,25,27],any:17,anyth:12,apart:6,append:[5,14,15,18,21],appli:27,apt:24,archiv:24,arg:12,arganis:26,argument:[18,24],armi:25,around:25,arrai:[2,3,4,16,21],array3d:10,ask:[2,20,27],associ:[0,1,2,3,4,5,13,19,20,26,27],assur:23,atom:[0,2,3,4,7],atom_i:14,atom_j:14,atomic_numb:8,atomtyp:8,attribut:13,audienc:23,auto:[9,21,23],automat:[15,17,21,25,26],automaticali:14,avail:24,availabl:[0,1,6],awesom:[17,23],b_x:16,b_y:16,back:21,backend:12,backward:23,base:[2,9,10,16,18,19,24,27],basic:[9,13,23,26],basicfil:18,becaus:[18,23],been:23,befor:[2,17,24],beggin:17,begin:[11,21],behav:5,below:7,beta:[1,16],between:[1,4,9,14,22,27],bigger:[2,10,27],binari:[18,19,22,23],binaryfil:18,bind:25,bit:[5,17,24,27],block:23,bond:[2,3,4,10,14,26,27],bool:[2,4,14,15,18],both:[22,27],bother:23,bound:[0,14],boundari:[1,16,26],box:16,brace:22,breath:17,brew:24,bring:11,buffer:0,buffsiz:0,bug:17,build:[6,9,17,18,19,20,23],built:[12,13,20,24,27],by_extens:20,c_x:16,c_y:16,c_z:16,call:[2,3,4,7,9,12,21],callback:12,can:[3,5,8,9,12,13,15],cannot:[6,9,18,19,27],cap:7,capac:[2,11],carlo:23,cartesian:27,ccmake:24,cell:[1,2,10,11,15],celltyp:16,ch3:[0,8],ch4:26,chang:[17,23],charg:[0,8],check:14,chemfil:[1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],chemfiles_:11,chemfiles_version:11,chemfiles_version_major:11,chemfiles_version_minor:11,chemfiles_version_patch:11,chemic:26,chemistri:15,chfl_:7,chfl_atom_atomic_numb:0,chfl_atom_charg:0,chfl_atom_coarse_grained:0,chfl_atom_covalent_radiu:0,chfl_atom_dummy:0,chfl_atom_element:0,chfl_atom_fre:[0,21],chfl_atom_from_fram:0,chfl_atom_from_topolog:0,chfl_atom_full_nam:0,chfl_atom_mass:0,chfl_atom_nam:0,chfl_atom_set_charg:0,chfl_atom_set_mass:0,chfl_atom_set_nam:0,chfl_atom_set_typ:0,chfl_atom_typ:0,chfl_atom_type_t:0,chfl_atom_types:0,chfl_atom_undefined:0,chfl_atom_vdw_radiu:0,chfl_cell_angl:1,chfl_cell_fre:[1,21],chfl_cell_from_fram:1,chfl_cell_infinite:1,chfl_cell_length:1,chfl_cell_matrix:1,chfl_cell_orthorhombic:1,chfl_cell_set_angl:1,chfl_cell_set_length:1,chfl_cell_set_typ:1,chfl_cell_triclinic:1,chfl_cell_typ:1,chfl_cell_type_t:1,chfl_cell_types:1,chfl_clear_error:6,chfl_close:5,chfl_cxx_error:6,chfl_file_error:6,chfl_format_error:6,chfl_frame:[0,1],chfl_frame_add_veloc:2,chfl_frame_atoms_count:2,chfl_frame_fre:[2,21],chfl_frame_guess_topolog:2,chfl_frame_has_veloc:2,chfl_frame_posit:[2,21],chfl_frame_res:2,chfl_frame_set_cel:2,chfl_frame_set_step:2,chfl_frame_set_topolog:2,chfl_frame_step:2,chfl_frame_veloc:2,chfl_generic_error:6,chfl_last_error:6,chfl_log_debug:6,chfl_log_error:6,chfl_log_info:6,chfl_log_level:6,chfl_log_level_t:6,chfl_log_stderr:6,chfl_log_warning:6,chfl_logfil:6,chfl_loglevel:6,chfl_match_t:3,chfl_max_selection_size:3,chfl_memory_error:6,chfl_select:3,chfl_selection_evalu:3,chfl_selection_evalut:3,chfl_selection_fre:3,chfl_selection_get:3,chfl_selection_match:3,chfl_selection_s:3,chfl_set_loglevel:6,chfl_statu:[0,1,2,3,4,5,6],chfl_strerror:6,chfl_success:[6,21],chfl_topolog:[4,21],chfl_topology:[0,2],chfl_topology_add_bond:[4,21],chfl_topology_angl:4,chfl_topology_angles_count:4,chfl_topology_append:[4,21],chfl_topology_atoms_count:4,chfl_topology_bond:4,chfl_topology_bonds_count:4,chfl_topology_dihedr:4,chfl_topology_dihedrals_count:4,chfl_topology_fre:[4,21],chfl_topology_from_fram:4,chfl_topology_isangl:4,chfl_topology_isbond:4,chfl_topology_isdihedr:4,chfl_topology_remov:4,chfl_topology_remove_bond:4,chfl_trajectory_clos:[5,21],chfl_trajectory_nstep:[5,21],chfl_trajectory_open:[5,21],chfl_trajectory_read:[5,21],chfl_trajectory_read_step:5,chfl_trajectory_set_cel:21,chfl_trajectory_set_topolog:[5,21],chfl_trajectory_set_topology_fil:5,chfl_trajectory_set_topology_with_format:5,chfl_trajectory_with_format:5,chfl_trajectory_writ:[5,21],chfl_version:7,choos:16,clang:24,classif:26,classs:26,clear:6,clear_bond:14,clone:24,close:5,cmake:[17,20,24],cmath:21,coars:[0,8,26],coarse_grained:8,code:[0,1,2,3,4,5,6],colon:27,column:22,com:[10,24],combin:[13,27],combinaison:27,come:13,command:24,commit:17,compar:27,comparison:[13,27],compat:23,compil:[20,23],complet:[18,22],complex:[25,27],compon:27,compos:[0,8],comprehens:23,compress:18,comput:[14,21,23],concern:17,conda:24,condit:[1,16,26],configur:[20,24],conserv:[2,10],consid:17,consist:17,constexpr:13,constitu:[4,14],constrain:26,constraint:27,construct:[14,16],constructor:[6,7,10,16,19,22],contain:[0,2,4,5,7,10,11,14,16,21,23,26],content:17,context:[3,27],continu:21,control:[9,24],convers:25,coordin:27,copi:[4,16],correspond:[3,6,7,10,20],could:[0,25],coupl:20,cout:[9,21,23],coval:[0,8],covalent_radiu:8,cover:23,cpp:[9,10],cpprefer:10,creat:[0,1,2,3,4,8,12,13,15,21,22,23,27],cross:[17,24],ctest:24,cubic:16,curent:12,current:[2,4,6,8,10,12],curs:24,cursor:18,cxx:[12,24],data:[2,4,5,10,18,23,24],databas:25,dcd:[19,22],dcmake_install_prefix:24,debug:[12,23],defin:[6,7,8,10,11,18,19,26],definit:14,degre:[1,16],delet:14,depend:[3,13,15,17,18],der:[0,8],deriv:9,describ:[17,19,26],descript:19,destroi:[0,1,2,3,4],detect:22,determin:26,dev:24,devel:24,develop:17,developp:[20,24],differ:18,difficult:25,dihedr:[2,3,4,10,14,27],directori:[6,9,18,19,20],discard:15,discuss:17,disk:18,displac:21,dispon:26,dist:21,distanc:[2,10,21,27],distribut:[24,25],doc:[6,9,17,18,19,20],doccument:24,document:13,doe:[2,5,10,15,18,22,25,26],domain:21,don:27,done:[15,21],doubl:[0,1,16,21],doxygen:[6,9,17,18,19],doxygenclass:[18,19],doxygendefin:6,doxygenstruct:9,drive:15,dummi:[0,8,26],dummy:8,dynam:[23,25],each:[13,17,20],easi:[17,22],easier:17,easili:[17,22,25,27],eavch:22,edit:17,edu:19,either:[17,18,23,24,27],electron:0,element:[0,2,3,8,26],elis:27,elision:23,empti:[2,4,5,8,10,14],enabl:[6,19],encod:[6,8],end:[4,18,21,27],endl:[9,21,23],energi:23,enorm:23,enough:21,enter:17,entri:[5,15,21,23],environ:24,eof:18,epel:24,equal:[4,13,16,27],equival:[12,27],eror:6,error:[0,1,2,3,4,5],etc:[8,18],evalu:[3,13],evaluat:[3,13],even:[17,23],ever:23,everi:17,everyth:[6,18,22],exampl:20,exception:[9,13],exisit:9,exist:[4,6,10,12,15,23,27],exit_success:21,experiment:10,express:27,ext:20,extens:[5,15,20,22,23],extension:22,extent:[20,26],extern:[17,20],extract:[5,23],facil:12,fact:27,failur:9,fals:[2,4,27],fashion:20,favorit:23,featur:[17,23],few:[17,24],fictit:26,field:26,figur:26,file:[5,6,9,12,15,17],file_t:19,fileerror:9,filenam:[5,6,9,15,18,21,23],fill:[0,1,2,3,4,5,10,19,21],find:[6,9,18,19,20,22,23,25],finer:9,first:[1,2,4,5,15,16,21,23,25,27],fix:17,follow:[6,7,11,13,15,20,21,22,23,24,26,27],forc:23,form:[18,27],format:[5,9,15],formaterror:9,fortran:23,found:[0,8,20,22,24],four:[3,26,27],fourth:[4,26],frame:[0,1,2,3,4,5,7,8,9],framework:17,free:[0,1,2,3,4,5,17,21],freshli:7,from:[0,1,2,3,4,5,6,8,9,10,13,15,17,18,19,20],full:[0,8,11,13,24],full_nam:8,fulli:16,further:24,gamma:[1,16],gcc:24,gener:[17,24],gess:15,get:[0,1,2,3,4,5,6,7,8,10,12,13,14,15,16,19,20,21,24],getlin:18,git:[17,24],github:[17,22,24],give:[2,20,22,23,27],given:[3,4,13,27],gnu:25,good:20,gpl:25,grain:[0,8,9,26],gro:[19,22],gromac:19,group:[0,8,23],guess:[2,5,10,15],guess_topolog:10,gui:24,h2o:26,had:23,happi:17,hard:15,harder:25,has_veloc:2,have:[2,7,15,16,17,19,22,23,24,26],header:[7,11,20,22],helium:21,here:[9,10,12,21,22,23,24,25],high:23,hold:[10,14,26],home:[6,9,18,19,24],homebrew:24,hope:23,how:[13,17,23],hpp:[11,21],html:17,http:[10,19,24],i686:24,idea:27,idx:[0,14],ifdef:17,implement:[15,17],imposs:8,improv:17,includ:[7,9,11,17,20,21,23],independ:27,index:[0,3,4,13,14],indic:[3,7,22,27],infinit:[10,16,26],infinite:[10,16],info:[6,12],inherit:[9,18],inifinit:26,init:24,initi:[2,24,26],initializd:10,input:21,instal:[23,24],installat:23,instanc:[19,20,24],instanci:18,instead:27,inted:18,integ:[2,11],intel:24,intend:18,interact:26,intern:10,interpret:15,invalid:2,involv:23,iostream:[9,21,23],is_open:18,isangl:14,isbond:14,isdihedr:14,iso:24,iterat:14,java:25,julia:23,just:[9,17,22,23,24,27],kind:[8,18,23,26],knife:25,know:[13,17,22,27],knowledg:17,known:27,lammp:19,lammps:[19,22],lammpstrj:22,languag:[13,17,21,23,25,26],last:6,last_index:21,later:24,latest:24,least:17,left:27,lenght:[1,16],length:21,less:27,level:[6,12,23],liaison:14,lib:24,libchemfil:23,libnetcdf:24,librari:[2,7,9,15,20],licenc:[21,25],like:[5,12],limit:26,line:[18,24],link:22,linux:17,list:[4,13,17,19,20],liter:27,live:24,local:24,log:[6,9,11],logbackend:12,logger:12,logging_cb_t:12,loglevel:12,look:[23,25],lot:17,lower:[12,13],lucki:22,luthaf:24,macro:[6,7],made:15,mai:[1,2,11,20,22,23,26],main:[5,9,11,15,21,23,25],mainli:26,major:11,make:[2,12,17,24,25,27],malloc:21,manag:[7,20,24],mani:[25,26],manual:22,map:[7,18],mass:[0,8,26,27],match:[3,5,13,25,27],math:21,matrici:[1,16],matrix3d:16,matrix:[1,16],max_match_size:13,maxim:[3,6,12,13],mdanalysi:23,mdtraj:23,mean:[5,21,25,27],member:3,memori:[0,1,2,3,4,5,7,9,18],memoryerror:9,merg:17,messag:[6,12,17,22],method:[18,23],might:25,mingw32:24,mingw64:24,mingw:24,minor:11,miss:10,mkdir:24,mode:[5,15,18],model:[23,26],modern:23,modifi:[0,1,4,8,10,14],modul:20,molecul:21,molecular:[23,25],molfil:[19,23],molfileformat:19,mont:23,more:[0,8,17,19,23,25,26,27],most:[23,24],move:16,msvc:24,msys2:24,multi:[23,25],multipl:17,must:25,n_match:3,name:[0,5,8,18,20,22,23,26,27],namespac:[11,23],nangl:4,natom:[2,4,10,14,21,23],nbond:4,ncfile:18,ncformat:19,ndihedr:4,need:[2,5,9,14,15,17,18,23,24,25],netcdf:[22,24],network:18,new_cel:15,next:[5,15],nice:[9,17],nline:18,non:[8,10,14,17,25],none:27,noth:[2,6,10,14],now:23,nstep:[5,15,19,21],nullopt:10,number:[0,2,3,4,5,8,10,11,13,14,15,18,19,21,25,27],numer:21,obei:21,object:20,offer:24,often:23,old:[2,10],onc:[23,27],onli:[1,9,10,17,18,19,22,23,26],only:[6,14,25],opaqu:7,open:[5,15,17,18,21],openbabel:23,opend:18,opene:15,oper:[7,13,14,15,18,20,27],option:[10,15,24,27],order:[5,11,23,24,27],org:24,orient:20,origin:21,orthogon:26,orthonorm:16,orthorhomb:16,orthorhombic:[1,16],orthoromb:[21,26],orthorombic:16,other:[3,4,9,15,16],otherwis:[2,4],out:[0,14],output:[6,9,12,18,19,21,23],over:[14,24,25],overal:17,overload:18,overview:23,overwrit:[6,12],own:23,packag:24,pacman:24,page:[21,22,24],pair:[3,27],paramet:[0,1,2,3,4,5,6,15,19,20,22],parenthes:27,pars:23,part:[23,27],particl:[8,10,14,26],patch:11,path:[5,12,15,18],pdb:[21,22],pdf:17,perform:12,period:[0,1,8,16,26],perl:25,pertin:9,physic:[0,8,15,23],pick:[17,23],piec:17,place:23,plai:9,plain:26,plan:[17,22],plateform:[17,24],pleas:[17,19,22,24],plugin:[19,22,23],pluginerror:9,point:[2,5,15,23],pointer:[0,1,2,3,4,5,6,7,21],polit:20,poor:25,popul:16,popular:23,posit:[2,9,10,14,21,22,23,26,27],posix:24,possibl:[1,16,18],post:23,pre:[3,10,23],precis:27,precompil:24,prefer:24,prefix:[7,11],presenc:2,present:[10,18,23,27],pretti:[23,25],previou:2,previous:[15,18,19],printf:21,privat:20,process:23,produc:23,program:[7,9,11,17,21,23,25],project:[6,9,16],propos:17,proven:7,provid:[12,15,17,18,20,22,23,24,25,26],pull:17,push:17,push_back:21,python:[20,23,24,25],quantum:23,question:17,radiu:[0,8],rather:18,raw_matrici:16,reach:23,read:[0,1,5,9,15,18,19,20],read_step:[15,19],readabl:25,reader:19,readlin:18,realiti:[0,8],recent:24,recomend:24,redirect:6,redistribut:25,regist:20,register_extens:20,register_format:20,regognit:25,regress:24,relat:[9,21,27],releas:24,remov:[4,14,27],remove_bond:14,replac:[5,15,18],repons:7,report:24,repositori:[17,24],repres:[16,18,20,26],represent:[1,6,16,18],request:[17,22],research:[19,23],reserv:10,reset:18,residu:23,resiz:[2,10,14],resolv:18,respect:17,result:[2,4,27],retriev:8,revers:27,rewind:18,room:17,root:21,rst:17,rubi:25,rule:27,run:[17,23,24],runtim:20,runtime_error:9,rust:23,sai:25,same:[7,18,23],scienc:[23,24],scientif:23,script:20,search:25,second:[1,4,16,27],section:[23,26],see:[19,22],select:[3,7,9,11],selectionerror:[9,13],selector:[13,23],separ:27,separatli:25,serv:18,set:[0,1,2,3,5,6,8,10,12,13,15,16,21,25,27],set_a:16,set_alpha:16,set_b:16,set_beta:16,set_c:16,set_cel:[10,15,21],set_charg:8,set_gamma:16,set_level:12,set_mass:8,set_nam:8,set_step:10,set_topolog:[10,15,21],set_typ:8,should:[1,4,5,7,9,11,12,13,16,17,19,23,24,26,27],side:[6,16,27],signific:3,silent:12,simpl:26,simpler:27,simul:[10,23],singl:15,singleton:12,site:[0,8,26],size:[0,2,3,4,10,13,16,21],size_t:[0,2,3,4,5,10,13,14,15,18,19,21],sizeof:21,skill:17,small:27,smiles:25,softwar:25,some:[10,11,20,22,23,24,25,26,27],someth:9,sometim:27,soon:23,sourc:17,space:[2,10],span3d:10,specif:[0,5,10,15,19,22],specifi:[15,21,22],spend:17,sphinx:17,sqrt:21,squar:[21,22],src:[20,22],stabl:23,stage:23,stand:25,standard:[5,6,17,24],start:[25,27],static_cast:21,statist:23,statment:9,statu:[0,1,2,3,4,5,6],std:[8,9,10,12,13,14,15,18,19,20,21,23],stderr:12,stdio:21,stdlib:21,stdout:[9,12],step:[2,5,10,15,19,23],still:23,storag:2,store:[2,8,10,14,16,23],stream:18,string:[0,3,5,6,7,8,11,12,13,15,18,19,20,22,26],struct:[3,9],structur:13,style:16,sub:18,subclass:[9,18,19],submodul:24,sucessful:24,support:[15,21],swiss:25,system:[2,4,7,10,14,17],tabl:[0,8],take:26,tap:24,target:23,technic:17,tell:4,templat:[10,12],termin:[0,6,7],test:[17,20,21,22,24],text:[18,22],textfil:18,textual:6,than:[0,2,8,10,12,13,25,26,27],thei:[17,22,26,27],them:[13,17,22,23,24,26],theoret:23,thermodynam:23,thi:[1,2,3,4,5,6,8,10,13,15,17,18,19,20,21,22,23,26,27],thing:17,think:17,third:[1,4,16,27],three:[1,3,16,26,27],through:24,throughtout:21,thrown:15,thu:9,time:[12,17,20],tip4p:26,to_fil:12,to_stderr:12,to_stdout:12,todo:17,togeth:[3,4,17,23],tool:[23,25],top:[15,20,22],topolog:[0,2,4,5,7,10,11],traj:23,trajectori:[2,5,7,9,11],trajectory_build:20,trajectory_builder_t:20,trajectoryfactori:20,travi:[6,9,17,18,19],treat:27,tri:23,triangular:16,triclin:[16,26],triclinic:[1,16],trj:[19,22],trr:[19,22],tutori:23,two:[20,27],type:[0,1,5,6,7,8,12,15,16,18,20,22,26],typenam:12,uiuc:19,undefin:[0,8,26],undefined:[8,14],under:[21,25],underli:15,understand:25,unit:[0,1,10,11,15],unitcel:[1,2,7,10,15,16,21,23],univers:21,unless:17,unpack:24,unsign:[3,21],updat:24,upper:16,usabl:[23,25],usag:[20,23],use:[2,3,15],user:[7,17],usual:18,val:[16,18],valid:[13,23],valu:[0,1,2,3,4,6,8,10,12,13,16,18,19,23,26,27],van:[0,8],vari:[3,13],variabl:[13,25,27],variad:12,variou:[8,20,23,24,26],vdw_radiu:8,vect:16,vector3d:16,vector:[1,13,14,16,18,21,26],veloc:[2,10,22,23,26,27],verbos:27,veri:[17,25],version:[7,10,11,17,18,24],virtual:[18,19],visualis:25,visualstudio:24,vmd:[19,22,23],volum:16,w64:24,waal:[0,8],wai:[9,15,17,23,24,26],want:[2,11,17,21,22,23,24],warn:[6,12],water:[21,26],web:17,welcom:[17,27],well:[24,27],went:6,wether:[2,14,22],whant:24,what:9,whatev:21,when:[1,5,7,15,16,17,18,20,21,22,24,27],where:[12,13,24,26],wherev:24,which:[2,5,6,7,11,17,18,19,21,22,23,24,25,27],whose:27,window:17,without:[21,23,26],work:[17,18,20,23],world:23,worri:26,would:15,wrap:[9,16,17,23],write:[2,5,15,17,18,19,20],writelin:18,writen:[5,19],writer:19,written:[15,20,21,23,25],wrong:[6,15],www:19,x86_64:24,xcode:24,xml:[6,9,18,19],xtc:[19,22],xyz:[9,21,22,23],xyzformat:19,yet:[15,22],yield:14,you:[9,11,17,20,21,22,23,24,25,27],your:[11,17,22,23,24,27],yourself:22,yum:24},titles:["Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_ATOM</span></code>","Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_CELL</span></code>","Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_FRAME</span></code>","Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_SELECTION</span></code>","Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_TOPOLOGY</span></code>","Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_TRAJECTORY</span></code>","Functions for errors handling","C interface reference","Atoms and atomic informations","Errors and exceptions","Frames","C++ interface reference","Logging capacities","Selections","Topology","Trajectory","Unit Cell","Contributing","<code class=\"docutils literal\"><span class=\"pre\">File</span></code> classes","<code class=\"docutils literal\"><span class=\"pre\">Format</span></code> classes","Chemfiles internals","Usage examples","Supported formats","Chemfiles, an efficient IO library for chemistry file formats","Installation","Other libraries for reading trajectories","Chemfiles features overview","Selection language"],titleterms:{"abstract":[18,19],"class":[18,19,20,23],"export":11,"function":[0,1,2,3,4,5,6,23],"new":22,asking:22,atom:[8,26],binari:24,block:26,build:[24,26],can:17,capac:12,cell:16,chemfil:[20,23,26],chemistri:23,chfl_atom:0,chfl_cell:1,chfl_frame:2,chfl_selection:3,chfl_topology:4,chfl_trajectory:5,code:17,compil:24,contribut:17,convert:21,core:24,cpp:21,data:26,depend:24,develop:23,differ:25,document:[17,23],effici:23,elision:27,entri:26,error:[6,9],exampl:21,except:9,external:17,featur:26,file:[18,23],format:[17,19,22,23],frame:[10,21,26],from:[21,24,26],group:26,handl:6,help:17,how:26,implement:[18,19],improve:17,index:21,inform:8,installat:24,interfac:[7,11],intern:20,issu:17,languag:27,librari:[23,24,25],like:[17,24],linux:24,list:22,log:12,macro:11,main:26,major:25,manipul:[0,1,2,3,4,5],manual:23,mdanalysi:25,mdtraj:25,molfil:25,multipl:21,openbabel:25,organis:[20,26],other:[17,25],overview:26,plugin:25,point:26,pre:24,project:17,read:[21,25],refer:[7,11,23],rmsd:21,select:[13,26,27],selector:27,share:17,simul:26,singl:21,sourc:[20,24],spread:17,step:[24,26],style:17,support:22,system:24,togeth:26,topolog:[14,26],trajectori:[15,25,26],unit:16,unitcel:26,unix:24,usage:21,user:23,vmd:25,what:17,window:24,word:17,would:17,wrap:26,write:21}})
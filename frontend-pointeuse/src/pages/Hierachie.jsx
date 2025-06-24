import React, { useState } from 'react';
import { ChevronDown, Edit, Trash2, MapPin, Settings ,Plus, Book } from 'lucide-react';
import Modal from "../components/Modal";
import AjoutService from '../components/AjoutService';

export default function Hierachie() {
  const [showNewSiteForm, setShowNewSiteForm] = useState(false);
  const [ajoutModal,setAjoutModal]=useState(false);

  const [newSiteName, setNewSiteName] = useState('');
  const [branches, setBranches] = useState([
    {
      id: 1,
      name: 'Filiale Nord',
      region: 'Région Nord de la France',
      siteCount: 1,
      expanded: false,
      sites: [
        {
          id: 1,
          name: 'Site Lille',
          expanded: false,
          services: [{
            id: 1,
            Designation: "Service Commercial",
            name: "atil1",
            Active: true,
            ToleranceCalcul: true,
            SoumisHS: true,
            DureeLimite: 5,
            DefaultSchedule: "morning shift",
            Schedules: ["morning shift", "evening shift"],
            Machines: ["Machine 1", "Machine 2"]
          }]
        }
      ]
    },{
      id: 2,
      name: 'Filiale Nord',
      region: 'Région Nord de la France',
      siteCount: 1,
      expanded: false,
      sites: [
        {
          id: 1,
          name: 'Site Lille',
          expanded: false,
          address: '123 Rue de la Paix, Lille',
          services: ['Service Commercial', 'Service Technique']
        }
      ]
    }
  ]);

  const toggleBranch = (branchId) => {
    setBranches(branches.map(branch => 
      branch.id === branchId 
        ? { ...branch, expanded: !branch.expanded }
        : branch
    ));
  };


  const addNewSite = (branchId) => {
    if (newSiteName.trim()) {
      setBranches(branches.map(branch => 
        branch.id === branchId 
          ? { 
              ...branch, 
              sites: [...branch.sites, {
                id: Date.now(),
                name: newSiteName,
                expanded: false,
                services: []
              }],
              siteCount: branch.siteCount + 1
            }
          : branch
      ));
      setNewSiteName('');
      setNewSiteAddress('');
      setShowNewSiteForm(false);
    }
  };

  const deleteSite = (branchId, siteId) => {
    setBranches(branches.map(branch => 
      branch.id === branchId 
        ? { 
            ...branch, 
            sites: branch.sites.filter(site => site.id !== siteId),
            siteCount: branch.siteCount - 1
          }
        : branch
    ));
  };
  const toggleSite = (siteId) => {
    setBranches(branches.map(branch => ({
      ...branch,
      sites: branch.sites.map(site => 
        site.id === siteId 
          ? { ...site, expanded: !site.expanded }
          : site
      )
    })));
  };

  return (
    <div className="mainContent">
       <Modal isOpen={ajoutModal} onClose={()=>setAjoutModal(false)} >
         <AjoutService/>
       </Modal>
      <div className="main-head">
        <h1>Hiérachie</h1>
      </div>
      {/* Header Button */}
      <button className="blueButton">
        <Plus />
        Nouvelle Filiale
      </button>
      <hr/>
      {/* Branch List */}
      <div className="space-y-4">
        {branches.map((branch) => (
          <div key={branch.id} className=" filliale-total">
            {/* Branch Header */}
            <div>
              <div className="filliale-Container">
                <div className="filliale-Container-text">
                  <button 
                    onClick={() => toggleBranch(branch.id)}
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${
                        branch.expanded ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <Book />

                  <div className="text-blue">
                    <h3 className="font-semibold text-gray-900">{branch.name}</h3>
                    <p className="text-sm text-gray-500">{branch.region}</p>
                    <p className="text-sm text-gray-400">{branch.siteCount} site(s)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-blue-500 hover:text-blue-600 p-1">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-500 hover:text-red-600 p-1">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add Site Button */}
              {branch.expanded && (
                <div className="mt-4">
                  <button 
                    onClick={() => setShowNewSiteForm(!showNewSiteForm)}
                    className="blueButton bg-green" style={{ marginLeft: '1rem' }}
                  >
                    <Plus />
                    Ajouter un Site
                  </button>
                </div>
              )}
            </div>
            {/* Expanded Content */}
            {branch.expanded && (
              <div className="border-t border-gray-200">
                {/* New Site Form */}
                {showNewSiteForm && (
                  <div>
                    <hr/>
                    <div className="input-site">
                      <h4 className="font-medium">Nouveau Site</h4>
                      <form className="">
                        <input
                          type="text"
                          placeholder="Nom du site"
                          value={newSiteName}
                          onChange={(e) => setNewSiteName(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                        />
                        <div className="filliale-Container-text">
                          <button 
                            onClick={() => addNewSite(branch.id)}
                            className="blueButton bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            Créer
                          </button>
                          <button 
                            onClick={() => setShowNewSiteForm(false)}
                            className="blueButton bg-red bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                          >
                            Annuler
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>  
                )}
                <hr/>

                {/* Sites List */}
                {branch.sites.map((site) => (
                  <div key={site.id} className="site-total">
                    <div className="filliale-Container">
                      <div className="filliale-Container-text">
                        <button 
                          onClick={() => toggleSite(site.id)}
                          className="text-blue-500 hover:text-blue-600 transition-colors"
                        >
                          <ChevronDown 
                            className={`w-5 h-5 transition-transform ${
                              site.expanded ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        <MapPin className="w-5 h-5 text-green-500 mt-0.5" />
                        <div className="filiale-Container-text">
                          <div>
                            <h2 className="font-medium text-gray-900">{site.name}</h2>
                            <div className="mt-4">
                              <button 
                                onClick={() => setAjoutModal(true)}
                                className="blueButton bg-green" style={{ marginLeft: '1rem' }}
                              >
                                <Plus />
                                Ajouter un Service
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 rounded-lg flex items-center gap-1 text-sm transition-colors">
                          <Edit className="w-3 h-3" />
                        </button>
                        <button 
                          onClick={() => deleteSite(branch.id, site.id)}
                          className="text-red-500 hover:text-red-600 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    {/* Expanded Site Content */}
                    {site.expanded && site.services && site.services.length > 0 && (
                      <div className="ml-8 mt-2 space-y-2">
                        <hr />
                        {site.services.map((service) => (
                          <div key={service.id || service} className="site-total">
                            <div className="filliale-Container">
                              <div className='filliale-Container-text'>
                                <Settings/>
                                <div>
                                  <h2>{service.name}</h2>
                                  <p>Designation: {service.Designation}</p>
                                  <p>Active: {service.Active ? 'Oui' : 'Non'}</p>
                                  <p>ToleranceCalcul: {service.ToleranceCalcul ? 'Oui' : 'Non'}</p>
                                  <p>SoumisHS: {service.SoumisHS ? 'Oui' : 'Non'}</p>
                                  <p>Durée Limite: {service.DureeLimite}</p>
                                  <p>Default Schedule: {service.DefaultSchedule}</p>
                                  <p>Horaires: {service.Schedules && service.Schedules.join(', ')}</p>
                                  <p>Machines: {service.Machines && service.Machines.join(', ')}</p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <button className="text-blue-500 hover:text-blue-600 p-1">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="text-red-500 hover:text-red-600 p-1">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>    
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
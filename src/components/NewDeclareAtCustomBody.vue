<template>
  <div class="newDeclareAtCustomBody">
    <!--检索区域-->
    <transition name="el-zoom-in-top">
      <div class="searchInputArea" v-show="searchShow">
        <span>海关编号：</span>
        <el-input class="searchInput" v-model="searchInput" placeholder="请输入内容"></el-input>
        <el-button type="primary" icon="el-icon-search" @click="searchDeclareHeadListByEntryID">
          查询
        </el-button>
      </div>
    </transition>
    <!--检索显示隐藏按钮-->
    <button class="inputAreaFlagBtn" @click="searchShow = !searchShow">
      <i :class="searchShow?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
    </button>
    <!--主体区域-->
    <div  :class="searchShow?'listArea_top_searchShow':'listArea_top_searchHide'">
      <!--列表区域-->
      <div class="listArea">
        <!--报关单表头区域-->
        <div class="list_container">
          <!--layout布局-->
          <el-row>
            <!--报关单表头list-->
            <el-col :span="14">
              <div class="grid-content bg-purple">
                <div class="listTitle">
                  <ul>
                    <li>报关单表头</li>
                  </ul>
                </div>
                <div class="declareHeadMainList">
                  <el-table :data="declareHeadList.slice((declareHeadCurrentPage-1)*declareHeadPagesize,declareHeadCurrentPage*declareHeadPagesize)"
                            style="width: 100%;" height="100%">
                    <el-table-column fixed prop="entryId" label="海关编号" style="width: 30%"></el-table-column>
                    <el-table-column prop="declarationOffice" label="申报地海关" style="width: 25%"></el-table-column>
                    <el-table-column prop="inspectionLocation" label="报检地" style="width: 25%"></el-table-column>
                    <el-table-column prop="importDate" label="进/出口日期" style="width: 20%"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="60">
                      <template slot-scope="scope">
                        <el-button @click="showChildrenList(scope.row)" type="text" size="small">查看</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-pagination class="pageStyle"
                                 layout="prev, pager, next"
                                 :total="declareHeadList.length"
                                 @current-change="declareHeadPagechange">
                  </el-pagination>
                </div>
              </div>
            </el-col>
            <!--报关单表头Detail-->
            <el-col :span="10">
              <div class="grid-content bg-purple-light">
                <div class="detailTitle">
                  <ul>
                    <li>报关单详细</li>
                  </ul>
                </div>
                <div class="declareHeadDetail">
                  <transition name="el-fade-in-linear">
                    <div v-show="!declareHeadDetailShow" class="transition-box">暂无数据</div>
                  </transition>
                  <transition name="el-fade-in-linear">
                    <div v-show="declareHeadDetailShow" class="transition-box">
                      <el-form label-width="150px" ref="declareHeadDetail" >
                        <el-form-item label="海关编号">
                          <el-input :disabled="true" v-model="declareHeadDetail.entryId"></el-input>
                        </el-form-item>
                        <el-form-item label="报关单类型">
                          <el-input :disabled="true" v-model="declareHeadDetail.entryTypeDecl"></el-input>
                        </el-form-item>
                        <el-form-item label="申报地海关">
                          <el-input :disabled="true" v-model="declareHeadDetail.declarationOffice"></el-input>
                        </el-form-item>
                        <el-form-item label="报检地">
                          <el-input :disabled="true" v-model="declareHeadDetail.inspectionLocation"></el-input>
                        </el-form-item>
                        <el-form-item label="进/出境关别">
                          <el-input :disabled="true" v-model="declareHeadDetail.imExOffice"></el-input>
                        </el-form-item>
                        <el-form-item label="进/出口日期">
                          <el-input :disabled="true" v-model="declareHeadDetail.importDate"></el-input>
                        </el-form-item>
                        <el-form-item label="申报日期">
                          <el-input :disabled="true" v-model="declareHeadDetail.declarantDate"></el-input>
                        </el-form-item>
                        <el-form-item label="收货人名称">
                          <el-input :disabled="true" v-model="declareHeadDetail.consigneeNameCn"></el-input>
                        </el-form-item>
                        <el-form-item label="申报单位名称">
                          <el-input :disabled="true" v-model="declareHeadDetail.declareAgentName"></el-input>
                        </el-form-item>
                        <el-form-item label="运输方式">
                          <el-input :disabled="true" v-model="declareHeadDetail.transportMode"></el-input>
                        </el-form-item>
                        <el-form-item label="启运国(地区)">
                          <el-input :disabled="true" v-model="declareHeadDetail.exportCountry"></el-input>
                        </el-form-item>
                        <el-form-item label="抵运国(地区)">
                          <el-input :disabled="true" v-model="declareHeadDetail.importCountry"></el-input>
                        </el-form-item>
                        <el-form-item label="启运港">
                          <el-input :disabled="true" v-model="declareHeadDetail.departurePort"></el-input>
                        </el-form-item>
                        <el-form-item label="入境口岸">
                          <el-input :disabled="true" v-model="declareHeadDetail.entryPort"></el-input>
                        </el-form-item>
                        <el-form-item label="集装箱数量">
                          <el-input :disabled="true" v-model="declareHeadDetail.containerQuantity"></el-input>
                        </el-form-item>
                        <el-form-item label="件数(总)">
                          <el-input :disabled="true" v-model="declareHeadDetail.packageQuantity"></el-input>
                        </el-form-item>
                        <el-form-item label="毛重(总)">
                          <el-input :disabled="true" v-model="declareHeadDetail.grossWeightTotal"></el-input>
                        </el-form-item>
                        <el-form-item label="净重(总)">
                          <el-input :disabled="true" v-model="declareHeadDetail.netWeight"></el-input>
                        </el-form-item>
                      </el-form>
                    </div>
                  </transition>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <!--标签区域-->
        <el-collapse-transition>
          <div v-show="showChildren">
            <!--报关单商品项-->
            <div class="list_container" v-show="declareGoodList.length > 0">
              <!--报关单商品项list-->
              <el-row>
                <el-col :span="14">
                  <div class="grid-content bg-purple">
                    <div class="listTitle">
                      <ul>
                        <li>报关单商品项</li>
                      </ul>
                    </div>
                    <div class="mainList">
                      <el-table :data="declareGoodList.slice((declareGoodCurrentPage-1)*declareGoodPagesize,declareGoodCurrentPage*declareGoodPagesize)"
                                style="width: 100%;" height="100%">
                        <el-table-column fixed prop="HSCode" label="商品编号" style="width: 30%"></el-table-column>
                        <el-table-column prop="goodsItemNo" label="商品名称" style="width: 25%"></el-table-column>
                        <el-table-column prop="goodsDescription" label="规格型号" style="width: 25%"></el-table-column>
                        <el-table-column prop="declaranQuantiy" label="申报数量" style="width: 20%"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="60">
                          <template slot-scope="scope">
                            <el-button @click="declareGoodDetailClick(scope.row)" type="text" size="small">查看</el-button>
                          </template>
                        </el-table-column>
                      </el-table>
                      <el-pagination class="pageStyle"
                                     layout="prev, pager, next"
                                     :total="declareGoodList.length"
                                     @current-change="declareGoodPagechange">
                      </el-pagination>
                    </div>
                  </div>
                </el-col>
                <!--报关单商品项Detail-->
                <el-col :span="10">
                  <div class="grid-content bg-purple-light declareGoodDetail">
                    <div class="detailTitle">
                      <ul>
                        <li>报关单商品项详细</li>
                      </ul>
                    </div>
                    <div class="rightDetail">
                      <transition name="el-fade-in-linear">
                        <div v-show="!declareGoodDetailShow" class="transition-box">暂无数据</div>
                      </transition>
                      <transition name="el-fade-in-linear">
                        <div v-show="declareGoodDetailShow" class="transition-box">
                          <el-form label-width="150px" ref="declareGooddetail">
                            <el-form-item label="商品编号">
                              <el-input :disabled="true" v-model="declareGooddetail.HSCode"></el-input>
                            </el-form-item>
                            <el-form-item label="检验检疫编码">
                              <el-input :disabled="true" v-model="declareGooddetail.inspectionQuarantineCode"></el-input>
                            </el-form-item>
                            <el-form-item label="商品名称">
                              <el-input :disabled="true" v-model="declareGooddetail.goodsName"></el-input>
                            </el-form-item>
                            <el-form-item label="商品英文名称">
                              <el-input :disabled="true" v-model="declareGooddetail.goodsNameEn"></el-input>
                            </el-form-item>
                            <el-form-item label="规格型号">
                              <el-input :disabled="true" v-model="declareGooddetail.goodsDescription"></el-input>
                            </el-form-item>
                            <el-form-item label="条形码">
                              <el-input :disabled="true" v-model="declareGooddetail.barCode"></el-input>
                            </el-form-item>
                            <el-form-item label="申报数量">
                              <el-input :disabled="true" v-model="declareGooddetail.declarantQuantity"></el-input>
                            </el-form-item>
                            <el-form-item label="申报计量单位">
                              <el-input :disabled="true" v-model="declareGooddetail.declarantMeasurementUnit"></el-input>
                            </el-form-item>
                            <el-form-item label="法定第一数量">
                              <el-input :disabled="true" v-model="declareGooddetail.normalQuantity"></el-input>
                            </el-form-item>
                            <el-form-item label="法定第一计量单位">
                              <el-input :disabled="true" v-model="declareGooddetail.normalMeasurementUnit"></el-input>
                            </el-form-item>
                            <el-form-item label="申报单价">
                              <el-input :disabled="true" v-model="declareGooddetail.declarantPrice"></el-input>
                            </el-form-item>
                            <el-form-item label="申报总价">
                              <el-input :disabled="true" v-model="declareGooddetail.declarantPriceTotal"></el-input>
                            </el-form-item>
                            <el-form-item label="成交币制">
                              <el-input :disabled="true" v-model="declareGooddetail.tradeCurrency"></el-input>
                            </el-form-item>
                            <el-form-item label="完税价格">
                              <el-input :disabled="true" v-model="declareGooddetail.dutyValue"></el-input>
                            </el-form-item>
                            <el-form-item label="原产国(地区)">
                              <el-input :disabled="true" v-model="declareGooddetail.originalCountry"></el-input>
                            </el-form-item>
                            <el-form-item label="最终目的国">
                              <el-input :disabled="true" v-model="declareGooddetail.destinationCountry"></el-input>
                            </el-form-item>
                            <el-form-item label="境内目的地">
                              <el-input :disabled="true" v-model="declareGooddetail.inlandGoodsDestination"></el-input>
                            </el-form-item>
                            <el-form-item label="境内货源地">
                              <el-input :disabled="true" v-model="declareGooddetail.inlandGoodsSource"></el-input>
                            </el-form-item>
                            <el-form-item label="货物型号">
                              <el-input :disabled="true" v-model="declareGooddetail.goodsModel"></el-input>
                            </el-form-item>
                            <el-form-item label="生产日期">
                              <el-input :disabled="true" v-model="declareGooddetail.produceDate"></el-input>
                            </el-form-item>
                            <el-form-item label="生产批次">
                              <el-input :disabled="true" v-model="declareGooddetail.prodBatchNo"></el-input>
                            </el-form-item>
                            <el-form-item label="非危险化学品">
                              <el-input :disabled="true" v-model="declareGooddetail.nondangerousGoods"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                      </transition>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <!--报关单集装箱信息-->
            <div class="list_container" v-show="declareBoxList.length > 0">
              <!--报关单集装箱list-->
              <el-row>
                <el-col :span="14">
                  <div class="grid-content bg-purple">
                    <div class="listTitle">
                      <ul>
                        <li>报关单集装箱信息</li>
                      </ul>
                    </div>
                    <div class="mainList">
                      <el-table :data="declareBoxList.slice((declareBoxCurrentPage-1)*declareBoxPagesize,declareBoxCurrentPage*declareBoxPagesize)"
                                style="width: 100%;" height="100%">
                        <el-table-column fixed prop="containerId" label="集装箱箱号" style="width: 30%"></el-table-column>
                        <el-table-column prop="containerSpecification" label="集装箱规格" style="width: 30%"></el-table-column>
                        <el-table-column prop="containerWithGoodsItem" label="集装箱商品项号关系" style="width: 40%"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="60">
                          <template slot-scope="scope">
                            <el-button @click="declareBoxDetailClick(scope.row)" type="text" size="small">查看</el-button>
                          </template>
                        </el-table-column>
                      </el-table>
                      <el-pagination class="pageStyle"
                                     layout="prev, pager, next"
                                     :total="declareBoxList.length"
                                     @current-change="declareBoxPagechange">
                      </el-pagination>
                    </div>
                  </div>
                </el-col>
                <!--报关单集装箱detail-->
                <el-col :span="10">
                  <div class="grid-content bg-purple-light declareBoxDetail">
                    <div class="detailTitle">
                      <ul>
                        <li>报关单集装箱详细</li>
                      </ul>
                    </div>
                    <div class="rightDetail">
                      <transition name="el-fade-in-linear">
                        <div v-show="!declareBoxDetailShow" class="transition-box">暂无数据</div>
                      </transition>
                      <transition name="el-fade-in-linear">
                        <div v-show="declareBoxDetailShow" class="transition-box">
                          <el-form label-width="150px" ref="declareBoxDetail">
                            <el-form-item label="集装箱号">
                              <el-input :disabled="true" v-model="declareBoxDetail.containerId"></el-input>
                            </el-form-item>
                            <el-form-item label="集装箱规格">
                              <el-input :disabled="true" v-model="declareBoxDetail.containerSpecification"></el-input>
                            </el-form-item>
                            <el-form-item label="集装箱商品项号关系">
                              <el-input :disabled="true" v-model="declareBoxDetail.containerWithGoodsItem"></el-input>
                            </el-form-item>
                            <el-form-item label="集装箱货重">
                              <el-input :disabled="true" v-model="declareBoxDetail.containerGrossWeight"></el-input>
                            </el-form-item>
                            <el-form-item label="集装箱状态代码">
                              <el-input :disabled="true" v-model="declareBoxDetail.statusCode"></el-input>
                            </el-form-item>
                            <el-form-item label="集装箱拼箱标识">
                              <el-input :disabled="true" v-model="declareBoxDetail.containerConsolidationID"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                      </transition>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <!--海关计税信息-->
            <div class="list_container" v-show="customsTaxList.length > 0">
              <el-row>
                <!--海关计税list-->
                <el-col :span="14">
                  <div class="grid-content bg-purple">
                    <div class="listTitle">
                      <ul>
                        <li>海关计税信息</li>
                      </ul>
                    </div>
                    <div class="mainList">
                      <el-table :data="customsTaxList.slice((customsTaxCurrentPage-1)*customsTaxPagesize,customsTaxCurrentPage*customsTaxPagesize)"
                                style="width: 100%;" height="100%">
                        <el-table-column fixed prop="goodsItemNo" label="项号" style="width: 30%"></el-table-column>
                        <el-table-column prop="dutyItemNo" label="税种序号" style="width: 30%"></el-table-column>
                        <el-table-column prop="taxCategory" label="税种" style="width: 40%"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="60">
                          <template slot-scope="scope">
                            <el-button @click="customsTaxDetailClick(scope.row)" type="text" size="small">查看</el-button>
                          </template>
                        </el-table-column>
                      </el-table>
                      <el-pagination class="pageStyle"
                                     layout="prev, pager, next"
                                     :total="customsTaxList.length"
                                     @current-change="customsTaxPagechange">
                      </el-pagination>
                    </div>
                  </div>
                </el-col>
                <!--海关计税Detail-->
                <el-col :span="10">
                  <div class="grid-content bg-purple-light customsTaxDetail">
                    <div class="detailTitle">
                      <ul>
                        <li>海关计税详细</li>
                      </ul>
                    </div>
                    <div class="rightDetail">
                      <transition name="el-fade-in-linear">
                        <div v-show="!customsTaxDetailShow" class="transition-box">暂无数据</div>
                      </transition>
                      <transition name="el-fade-in-linear">
                        <div v-show="customsTaxDetailShow" class="transition-box">
                          <el-form label-width="150px" ref="customsTaxDetail">
                            <el-form-item label="项号">
                              <el-input :disabled="true" v-model="customsTaxDetail.goodsItemNo"></el-input>
                            </el-form-item>
                            <el-form-item label="税种序号">
                              <el-input :disabled="true" v-model="customsTaxDetail.dutyItemNo"></el-input>
                            </el-form-item>
                            <el-form-item label="税种">
                              <el-input :disabled="true" v-model="customsTaxDetail.taxCategory"></el-input>
                            </el-form-item>
                            <el-form-item label="滞纳、滞报标记">
                              <el-input :disabled="true" v-model="customsTaxDetail.delayMark"></el-input>
                            </el-form-item>
                            <el-form-item label="退补税标志">
                              <el-input :disabled="true" v-model="customsTaxDetail.dutyFlag"></el-input>
                            </el-form-item>
                            <el-form-item label="税费计征标准">
                              <el-input :disabled="true" v-model="customsTaxDetail.taxType"></el-input>
                            </el-form-item>
                            <el-form-item label="实征税额">
                              <el-input :disabled="true" v-model="customsTaxDetail.taxReal"></el-input>
                            </el-form-item>
                            <el-form-item label="减免税额">
                              <el-input :disabled="true" v-model="customsTaxDetail.taxRelief"></el-input>
                            </el-form-item>
                            <el-form-item label="实征从价税率">
                              <el-input :disabled="true" v-model="customsTaxDetail.realRate"></el-input>
                            </el-form-item>
                            <el-form-item label="应征从价税率">
                              <el-input :disabled="true" v-model="customsTaxDetail.taxRate"></el-input>
                            </el-form-item>
                            <el-form-item label="实征从量税率">
                              <el-input :disabled="true" v-model="customsTaxDetail.realRateByQty"></el-input>
                            </el-form-item>
                            <el-form-item label="应征从量税率">
                              <el-input :disabled="true" v-model="customsTaxDetail.taxRateByQty"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                      </transition>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <!--报关单随附单据信息-->
            <div class="list_container" v-show="declareBillList.length > 0">
              <el-row>
                <!--报关单随附信息List-->
                <el-col :span="14">
                  <div class="grid-content bg-purple">
                    <div class="listTitle">
                      <ul>
                        <li>报关单随附单据信息</li>
                      </ul>
                    </div>
                    <div class="mainList">
                      <el-table :data="declareBillList.slice((declareBillCurrentPage-1)*declareBillPagesize,declareBillCurrentPage*declareBillPagesize)"
                                style="width: 100%;" height="100%">
                        <el-table-column fixed prop="DOCU_TYPE" label="单据类别" style="width: 30%"></el-table-column>
                        <el-table-column prop="DOCU_CODE" label="单据号" style="width: 30%"></el-table-column>
                        <el-table-column prop="DOCU_NAME" label="单据名称" style="width: 40%"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="60">
                          <template slot-scope="scope">
                            <el-button @click="declareBillDetailClick(scope.row)" type="text" size="small">查看</el-button>
                          </template>
                        </el-table-column>
                      </el-table>
                      <el-pagination class="pageStyle"
                                     layout="prev, pager, next"
                                     :total="declareBillList.length"
                                     @current-change="declareBillPagechange">
                      </el-pagination>
                    </div>
                  </div>
                </el-col>
                <!--报关单随附单据Detail-->
                <el-col :span="10">
                  <div class="grid-content bg-purple-light declareBillDetail">
                    <div class="listTitle">
                      <ul>
                        <li>报关单随附单据详细</li>
                      </ul>
                    </div>
                    <div class="rightDetail">
                      <transition name="el-fade-in-linear">
                        <div v-show="!declareBillDetailShow" class="transition-box">暂无数据</div>
                      </transition>
                      <transition name="el-fade-in-linear">
                        <div v-show="declareBillDetailShow" class="transition-box">
                          <el-form label-width="150px" ref="declareBillDetail">
                            <el-form-item label="单据类别">
                              <el-input :disabled="true" v-model="declareBillDetail.DOCU_TYPE" ></el-input>
                            </el-form-item>
                            <el-form-item label="单据号">
                              <el-input :disabled="true" v-model="declareBillDetail.DOCU_CODE" ></el-input>
                            </el-form-item>
                            <el-form-item label="单据名称">
                              <el-input :disabled="true" v-model="declareBillDetail.DOCU_NAME" ></el-input>
                            </el-form-item>
                            <el-form-item label="单据来源">
                              <el-input :disabled="true" v-model="declareBillDetail.DOCU_SOURCE" ></el-input>
                            </el-form-item>
                            <el-form-item label="单据文件名称">
                              <el-input :disabled="true" v-model="declareBillDetail.DOCU_FILE_ID" ></el-input>
                            </el-form-item>
                            <el-form-item label="单据格式">
                              <el-input :disabled="true" v-model="declareBillDetail.MIME_TYPE" ></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                      </transition>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../utils/axios";
import { mapGetters } from "vuex";

export default {
  name: "NewDeclareAtCustom",
  data() {
    return {
      //检索输入
      searchInput: '',
      //搜索区域显示flag
      searchShow: true,
      //标签显示flag
      showChildren:false,
      //报关单表头详细显示flag
      declareHeadDetailShow: false,
      //报关单商品项详细显示flag
      declareGoodDetailShow: false,
      //集装箱信息详细显示flag
      declareBoxDetailShow: false,
      //海关计税详细显示flag
      customsTaxDetailShow: false,
      //报关单随附单据显示flag
      declareBillDetailShow: false,
      //报关单表头list
      declareHeadList:[],
      //商品项list
      declareGoodList:[],
      //集装箱信息list
      declareBoxList:[],
      //海关计税信息list
      customsTaxList:[],
      //报关单随附单据信息List
      declareBillList:[],

      //报税单表头详细
      declareHeadDetail: {
          entryId: 'a',//海关编号
          entryTypeDecl: '',//报关单类型
          declarationOffice: '',//申报地海关
          inspectionLocation: '',//报检地
          imExOffice: '',//进/出境关别
          importDate: '',//进/出口日期
          declarantDate: '',//申报日期
          consigneeNameCn: '',//收货人名称
          declareAgentName: '',//申报单位名称
          transportMode: '',//运输方式
          exportCountry: '',//启运国(地区)
          importCountry: '',//抵运国(地区)
          departurePort: '',//启运港
          entryPort: '',//入境口岸
          containerQuantity: '',//集装箱数量
          packageQuantity: '',//件数(总)
          grossWeightTotal: '',//毛重(总)
          netWeight: ''//净重(总)
      },
      //商品项详细
      declareGooddetail:{
          entryId: '',//海关编号
          goodsItemNo: '',//项号
          HSCode: '',//商品编号
          inspectionQuarantineCode: '',//检验检疫编码
          goodsName: '',//商品名称
          goodsNameEn: '',//商品英文名称
          goodsDescription: '',//规格型号
          barCode: '',//条形码
          declarantQuantity: '',//申报数量
          declarantMeasurementUnit: '',//申报计量单位
          normalQuantity: '',//法定第一数量
          normalMeasurementUnit: '',//法定第一计量单位
          declarantPrice: '',//申报单价
          declarantPriceTotal: '',//申报总价
          tradeCurrency: '',//成交币制
          dutyValue: '',//完税价格
          originalCountry: '',//原产国(地区)
          destinationCountry: '',//最终目的国
          inlandGoodsDestination: '',//境内目的地
          inlandGoodsSource: '',//境内货源地
          goodsModel: '',//货物型号
          produceDate: '',//生产日期
          prodBatchNo: '',//生产批次
          nondangerousGoods: ''//非危险化学品
      },
      //集装箱详细
      declareBoxDetail:{
          entryId: '',//海关编号
          containerId: '',//集装箱号
          containerSpecification: '',//集装箱规格
          containerWithGoodsItem: '',//集装箱商品项号关系
          containerGrossWeight: '',//集装箱货重
          statusCode: '',//集装箱状态代码
          containerConsolidationID: ''//集装箱拼箱标识
      },
      //海关计税详细
      customsTaxDetail:{
          entryId: '',//海关编号
          goodsItemNo: '',//项号
          dutyItemNo: '',//税种序号
          taxCategory: '',//税种
          delayMark: '',//滞纳、滞报标记
          dutyFlag: '',//退补税标志
          taxType: '',//税费计征标准
          taxReal: '',//实征税额
          taxRelief: '',//减免税额
          realRate: '',//实征从价税率
          taxRate: '',//应征从价税率
          realRateByQty: '',//实征从量税率
          taxRateByQty: ''//应征从量税率
      },
      //报关单随附单据详细
      declareBillDetail:{
          entryId: '',//海关编号
          DOCU_TYPE: '',//单据类别
          DOCU_CODE: '',//单据号
          DOCU_NAME: '',//单据名称
          DOCU_SOURCE: '',//单据来源
          DOCU_FILE_ID: '',//单据文件名称
          MIME_TYPE: ''//单据(文件)格式
      },

      //报税单表头分页参数
        declareHeadPagesize:10,//每页的数据条数
        declareHeadCurrentPage:1,//默认开始页面
      //商品项分页参数
        declareGoodPagesize:5,//每页的数据条数
        declareGoodCurrentPage:1,//默认开始页面
      //集装箱分页参数
        declareBoxPagesize:5,//每页的数据条数
        declareBoxCurrentPage:1,//默认开始页面
      //海关计税分页参数
        customsTaxPagesize:5,//每页的数据条数
        customsTaxCurrentPage:1,//默认开始页面
      //报关单随附单据分页参数
        declareBillPagesize:5,//每页的数据条数
        declareBillCurrentPage:1//默认开始页面
    }
  },
  methods: {
    //检索报关单list
    searchDeclareHeadListByEntryID(){
      //标签显示
      this.showChildren = false;
      //标签详细隐藏
        //报关单表头详细显示flag
        this.declareHeadDetailShow = false;
        //报关单商品项详细显示flag
        this.declareGoodDetailShow = false;
        //集装箱信息详细显示flag
        this.declareBoxDetailShow = false;
        //海关计税详细显示flag
        this.customsTaxDetailShow = false;
        //报关单随附单据显示flag
        this.declareBillDetailShow = false;

      var _this = this;
      this.$store
        .dispatch("searchDeclareHeadListByEntryID",this.searchInput)
        .then(response => {
          console.log("searchDeclareHeadListByEntryID");
          //检索后报关单表头list赋值
          _this.declareHeadList = response.data();
      })
    },
    // 报关单查看事件
    showChildrenList(row){
      //详细赋值
      this.declareHeadDetail = row;
      //标签显示
      this.showChildren = true;
      //报关单详细显示
      this.declareHeadDetailShow = true;

      var _this = this;

      //获取报关单商品list
      this.$store
        .dispatch("getDeclareGoodList")
        .then(response => {
            //业务逻辑
          console.log("getDeclareGoodList")
          _this.declareGoodList = response.data();
        });

      //获取集装箱信息list
      this.$store
        .dispatch("getDeclareBoxList")
        .then(response => {
          //业务逻辑
          console.log("getDeclareBoxList")
          _this.declareBoxList = response.data();
        });

      //获取海关计税list
      this.$store
        .dispatch("getCustomsTaxList")
        .then(response => {
          //业务逻辑
          console.log("getCustomsTaxList")
          _this.customsTaxList = response.data();
        });

      //获取报关单随附单据list
      this.$store
        .dispatch("getdeclareBillList")
        .then(response => {
            //业务逻辑
            console.log("getdeclareBillList")
            _this.declareBillList = response.data();
        });
    },
    //报关单商品查看事件
    declareGoodDetailClick(row){
      //详细赋值
      this.declareGooddetail = row;
      //报关单商品项详细显示
      this.declareGoodDetailShow = true;
    },
    //集装箱信息查看事件
    declareBoxDetailClick(row){
      //详细赋值
      this.declareBoxDetail = row;
      //集装箱信息详细显示
      this.declareBoxDetailShow = true;
    },
    //海关计税查看事件
    customsTaxDetailClick(row){
      //详细赋值
      this.customsTaxDetail = row;
      //海关计税详细显示
      this.customsTaxDetailShow = true;
    },
    //报关单随附单据查看事件
    declareBillDetailClick(row){
      //详细赋值
      this.declareBillDetail = row;
      //报关单随附单据详细显示
      this.declareBillDetailShow = true;
    },
    //报关单表头list翻页事件
    declareHeadPagechange(val){
      this.declareHeadCurrentPage = val;
    },
    //商品项List翻页事件
    declareGoodPagechange(val){
      this.declareGoodCurrentPage = val;
    },
    //集装箱List翻页事件
    declareBoxPagechange(val){
      this.declareBoxCurrentPage = val;
    },
    //海关计税分页事件
    customsTaxPagechange(val){
      this.customsTaxCurrentPage = val;
    },
    //报关单随附单据分页事件
    declareBillPagechange(val){
      this.customsTaxCurrentPage = val;
    }
  },
  mounted(){
    //初始化加载
    var _this = this;
    this.$store
      .dispatch("searchDeclareHeadListByEntryID",this.searchInput)
      .then(response => {
          console.log("searchDeclareHeadListByEntryID");
          //检索后报关单表头list赋值
          _this.declareHeadList = response.data();
      })
  },
  computed: {
    /*...mapGetters(["token"])*/
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss">
.newDeclareAtCustomBody{
  min-height: 900px;
  min-width: 1366px;
  padding-top: 50px;
  .searchInputArea{
    height: 55px;
    /*min-width: 1366px;*/
    border-bottom: 1px solid rgba(158, 158, 158, 0.04);
    line-height: 55px;
    padding-left: 90px;
    width: 100%;
    position: fixed;
    background: white;
    z-index: 10;
    .searchInput{
      width: 300px;
      height: 40px;
      margin-left: 40px;
      margin-right: 45%;
    }
  }
  .inputAreaFlagBtn{
    position: fixed;
    margin: 8px;
    cursor: pointer;
    outline: none;
    z-index: 11;
  }
  .listArea_top_searchShow{
    transition: .28s;
    margin: -55px 50px 0 50px;
    border-left: 1px solid rgba(158, 158, 158, 0.04);
    border-right: 1px solid rgba(158, 158, 158, 0.04);
    /*display: flow-root;*/
    .listArea{
      margin-top: 120px;
      border-left: 1px solid rgba(158, 158, 158, 0.04);
      border-right: 1px solid rgba(158, 158, 158, 0.04);
      min-height: 800px;
      transition: .28s;
    }
  }
  .listArea_top_searchHide{
    transition: .28s;
    margin: -55px 50px 0 50px;
    border-left: 1px solid rgba(158, 158, 158, 0.04);
    border-right: 1px solid rgba(158, 158, 158, 0.04);
    /*display: flow-root;*/
    .listArea {
      margin-top: 70px;
      border-left: 1px solid rgba(158, 158, 158, 0.04);
      border-right: 1px solid rgba(158, 158, 158, 0.04);
      min-height: 800px;
      transition: .28s;
    }
  }
  .list_container{
    margin-left: 15px;
    padding-bottom: 30px;
    /*width: 45%;*/
  }
  .declareHeadMainList{
    margin-left: 15px;
    width: 90%;
    height: 300px;
    border-left: 1px solid rgba(158, 158, 158, 0.04);
    border-right: 1px solid rgba(158, 158, 158, 0.04);
  }
  .mainList{
    margin-left: 15px;
    width: 90%;
    height: 200px;
    border-left: 1px solid rgba(158, 158, 158, 0.04);
    border-right: 1px solid rgba(158, 158, 158, 0.04);
  }
  .declareHeadDetail{
    margin-right: 20px;
    border: 1px solid rgba(158, 158, 158, 0.04);
    height: 300px;
    max-height: 300px;
    overflow: auto;
  }
  .rightDetail{
    margin-right: 20px;
    border: 1px solid rgba(158, 158, 158, 0.04);
    height: 200px;
    max-height: 200px;
    overflow: auto;
  }
  .el-form-item{
    margin: 5px 0 5px 0;
  }
  .pageStyle{
    padding-top: 3px;
    float: right;
  }
  .transition-box{
    margin-right: 20px;
    line-height: 30px;
  }
}
</style>
